<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 22.10.2019
 * Time: 13:03
 */

namespace App\Dto;


class MarkerFactory
{
    static function create(array $data): MarkerClass
    {
        return new MarkerClass(
            $data['latitude'],
            $data['longitude'],
            $data['idPlace'],
            $data['info']
        );
    }
}