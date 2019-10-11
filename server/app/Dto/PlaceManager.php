<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:28
 */

namespace App\Dto;


use App\Place;

class PlaceManager
{
    public function add(PlaceClass $placeClass)
    {
        $place = new Place;
        $place->latitude = $placeClass->getLatitude();
        $place->longitude = $placeClass->getLongitude();
        $place->idUser = $placeClass->getIdUser();
        $place->name = $placeClass->getName();
        $place->description = $placeClass->getDescription();
        $place->phoneNr = $placeClass->getPhoneNr();

        $place->save();
    }
}