const mysql = require("../mysql").pool;
const bcrypt = require("bcrypt");
require("dotenv").config();


// RETORNA TODOS OS  ADMINISTRADORES

exports.getAll = (req, res, next) => {
    const page = req.query._page || 1;

    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query("SELECT * FROM administrador;", (error, result, fields) => {
            if (error) {
                return res.status(500).send({ error: error });
            }
            conn.release();
            const limit = req.query._limit || result.length;

            let startIndex = (page - 1) * limit;
            let endIndex = page * limit;

            const resultado = result.slice(startIndex, endIndex);
            return res.status(200).send(resultado);
        });
    });
};


//  RETORNA QUANTIDADE DE PRODUTOS VENDIDOS NO TOTAL

exports.getQtdVendas = (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `select
            sum(itempedido.Prod_Quantidade)
            as quantidade 
            from itempedido 
            join pedido 
            where itempedido.Id_Pedido = pedido.Id_Pedido;`,
            (error, resultado) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send(resultado);
            }
        );
    });
};


//  RETORNA QUANTIDADE DE PRODUTOS VENDIDOS NO DIA

exports.getQtdVendasDia = (req, res) => {
    let ano = req.params.ano
    let mes = req.params.mes
    let dia = req.params.dia
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `select
            sum(itempedido.Prod_Quantidade)
            as quantidade 
            from itempedido 
            join pedido 
            where itempedido.Id_Pedido = pedido.Id_Pedido 
            and pedido.Data_Pedido like "${ano}-${mes}-${dia}";`,
            [req.body.ano, req.body.mes, req.body.dia],
            (error, resultado) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send(resultado);
            }
        );
    });
};


//  RETORNA QUANTIDADE DE PRODUTOS VENDIDOS NO MÊS

exports.getQtdVendasMes = (req, res) => {
    let ano = req.params.ano
    let mes = req.params.mes
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `select
            sum(itempedido.Prod_Quantidade)
            as quantidade 
            from itempedido 
            join pedido 
            where itempedido.Id_Pedido = pedido.Id_Pedido 
            and pedido.Data_Pedido like "${ano}-${mes}%";`,
            [req.body.ano, req.body.mes],
            (error, resultado) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send(resultado);
            }
        );
    });
};


//  RETORNA OS DADOS DE UM ADMINISTRADOR

exports.getOne = (req, res) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            "SELECT * FROM administrador WHERE Id_adm = ?;",
            [req.params.id_adm],
            (error, resultado) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send(resultado);
            }
        );
    });
};


// INSERE UM ADMINISTRADOR

exports.addNew = (req, res, next) => {
    mysql.getConnection((err, conn) => {
        if (err) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            "SELECT * FROM administrador WHERE Login = ?",
            [req.body.login],
            (error, results) => {
                if (error) {
                    return res.status(500).send({ error: error });
                }
                if (results.length > 0) {
                    res.status(409).send({ mensagem: "Já Cadastrado" });
                } else {
                    bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                        if (errBcrypt) {
                            return res.status(500).send({ error: errBcrypt });
                        }
                        conn.query(
                            `INSERT INTO administrador (Login, Senha) VALUES (?,?)`,
                            [req.body.login, hash],
                            (error, results) => {
                                conn.release();
                                if (error) {
                                    return res
                                        .status(500)
                                        .send({ error: error });
                                }
                                response = {
                                    mensagem:
                                        "Administrador Inserido com sucesso",
                                    AdminCriado: {
                                        Id_Admin: results.insertId,
                                    },
                                };
                                return res.status(201).send(response);
                            }
                        );
                    });
                }
            }
        );
    });
};


//  ALTERA UM ADMINISTRADOR

exports.update = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `UPDATE administrador SET 
            Login = ?,
            Senha = ?
            WHERE Id_Adm = ?`,

            [req.body.login, req.body.senha, req.body.id_adm],

            (error, resultado, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error });
                }
                res.status(202).send({
                    mensagem: "Administrador Alterado com sucesso",
                });
            }
        );
    });
};


//  RETORNA O NÚMERO DE CLIENTES CADASTRADOS

exports.getQtdCliente = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            `select count(DISTINCT Id_Cli) as quantidade
            from pedido
            where pedido.Status_pedido = 2 ;`,
            (error, resultado, fields) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error });
                }
                return res.status(200).send(resultado);
            }
        );
    });
};


//  DELETA UM ADMINISTRADOR

exports.delete = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) {
            return res.status(500).send({ error: error });
        }
        conn.query(
            "DELETE FROM administrador WHERE Id_Adm = ?",
            [req.body.id_adm],
            (error, resultado) => {
                conn.release();
                if (error) {
                    return res.status(500).send({ error: error });
                }
                res.status(202).send({
                    mensagem: "Administrador Deletado com sucesso",
                });
            }
        );
    });
};