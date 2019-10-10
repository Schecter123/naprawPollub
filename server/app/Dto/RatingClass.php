<?php
/**
 * Created by PhpStorm.
 * User: Szef
 * Date: 28.09.2019
 * Time: 13:29
 */

namespace App\Dto;


class RatingClass
{
    protected $value;
    protected $idUser;
    protected $idDefect;

    /**
     * RatingClass constructor.
     * @param $value
     * @param $idUser
     * @param $idDefect
     */
    public function __construct($value, $idUser, $idDefect)
    {
        $this->value = $value;
        $this->idUser = $idUser;
        $this->idDefect = $idDefect;
    }

    /**
     * @return mixed
     */
    public function getValue()
    {
        return $this->value;
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
    public function getIdDefect()
    {
        return $this->idDefect;
    }



}