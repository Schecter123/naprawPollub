<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:28
 */

namespace App\Dto;


class PlaceClass
{
    protected $latitude;
    protected $longitude;
    protected $idUser;
    protected $name;
    protected $description;
    protected $phoneNr;

    /**
     * PlaceClass constructor.
     * @param $latitude
     * @param $longitude
     * @param $idUser
     * @param $name
     * @param $description
     * @param $phoneNr
     */
    public function __construct($latitude, $longitude, $idUser, $name, $description, $phoneNr)
    {
        $this->latitude = $latitude;
        $this->longitude = $longitude;
        $this->idUser = $idUser;
        $this->name = $name;
        $this->description = $description;
        $this->phoneNr = $phoneNr;
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
    public function getIdUser()
    {
        return $this->idUser;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return mixed
     */
    public function getPhoneNr()
    {
        return $this->phoneNr;
    }


}