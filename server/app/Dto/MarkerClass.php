<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 22.10.2019
 * Time: 13:02
 */

namespace App\Dto;


class MarkerClass
{
    protected $latitude;
    protected $longitude;
    protected $idPlace;
    protected $info;

    /**
     * MarkerClass constructor.
     * @param $latitude
     * @param $longitude
     * @param $idPlace
     * @param $info
     */
    public function __construct($latitude, $longitude, $idPlace, $info)
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;
        $this->idPlace = $idPlace;
        $this->info = $info;
    }

    /**
     * @return mixed
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * @return mixed
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * @return mixed
     */
    public function getIdPlace()
    {
        return $this->idPlace;
    }

    /**
     * @return mixed
     */
    public function getInfo()
    {
        return $this->info;
    }


}