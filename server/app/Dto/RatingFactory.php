<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:29
 */

namespace App\Dto;


class RatingFactory
{
    static function create(array $data): RatingClass
    {
        return new RatingClass(
            $data['value'],
            $data['idUser'],
            $data['idDefect']
        );
    }

}