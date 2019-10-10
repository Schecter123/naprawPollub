<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:28
 */

namespace App\Dto;


class PlaceFactory
{
    static function create(array $data): PlaceClass
    {
        return new PlaceClass(
            $data['latitude'],
            $data['langitude'],
            $data['idUser'],
            $data['name'],
            $data['description'],
            $data['phoneNr']
        );
    }
}