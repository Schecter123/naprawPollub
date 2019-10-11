<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:24
 */

namespace App\Dto;


class CommentFactory
{
    static function create(array $data): CommentClass
    {
        return new CommentClass(
            $data['idUser'],
            $data['idDefect'],
            $data['content'],
            $data['date']
        );
    }

}