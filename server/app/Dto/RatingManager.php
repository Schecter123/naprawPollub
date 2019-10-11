<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:29
 */

namespace App\Dto;


use App\Rating;

class RatingManager
{
    public function add(RatingClass $ratingClass)
    {
        $rating = new Rating;
        $rating->value = $ratingClass->getValue();
        $rating->idUser = $ratingClass->getIdUser();
        $rating->idDefect = $ratingClass->getIdDefect();

        $rating->save();
    }

}