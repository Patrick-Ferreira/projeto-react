<?php

require 'Connection.php';

class Pedido
{
  public static function getAllRequests()
  {
    $connection = Connection::getDB();

    $stmt = $connection->query('SELECT * FROM pedidos');

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public static function getRequestsWithProducts() {
    $connection = Connection::getDB();

    $stmt = $connection->query('SELECT * FROM pedidos JOIN produtos ON pedidos.produtos_id = produto.idprodutos');

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}