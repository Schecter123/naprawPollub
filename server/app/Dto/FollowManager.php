<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:27
 */

namespace App\Dto;


use App\Follow;

class FollowManager
{
    public function add(FollowClass $followClass)
    {
        $follow = new Follow;
        $follow->idPlace = $followClass->getIdPlace();
        $follow->idUser = $followClass->getIdUser();

        $follow->save();
    }
}