<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 22.10.2019
 * Time: 13:03
 */

namespace App\Dto;


use App\Marker;

class MarkerManager
{
    public function add(MarkerClass $markerClass)
    {
        $marker = new Marker;
        $marker->latitude = $markerClass->getLatitude();
        $marker->longitude = $markerClass->getLongitude();
        $marker->idPlace = $markerClass->getIdPlace();
        $marker->info = $markerClass->getInfo();

        $marker->save();
    }

    public function update(MarkerClass $markerClass, $id)
    {
        $marker = Marker::find($id);
        $marker->latitude = $markerClass->getLatitude();
        $marker->longitude = $markerClass->getLongitude();
        $marker->idPlace = $markerClass->getIdPlace();
        $marker->info = $markerClass->getInfo();

        $marker->save();
    }
}