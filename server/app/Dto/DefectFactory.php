<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:25
 */

namespace App\Dto;


class DefectFactory
{
    static function create(array $data): DefectClass
    {
        return new DefectClass(
            $data['defectType'],
            $data['idPlace'],
            $data['idUser'],
            $data['idRoom'],
            $data['idMarker'],
            $data['defectState'],
            $data['description'],
            $data['date'],
            $data['photoURL']
        );
    }
}