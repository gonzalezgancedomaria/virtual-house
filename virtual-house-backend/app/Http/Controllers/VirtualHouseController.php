<?php

namespace App\Http\Controllers;

use App\Models\VirtualHouse;
use Illuminate\Http\Request;

class VirtualHouseController extends Controller
{
    /**
     * Listado de las casas virtuales
     * @OA\Get (
     *     path="/virtual-houses",
     *     tags={"VirtualHouses"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="array",
     *                 property="virutal-houses",
     *                 @OA\Items(
     *                     type="object",
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function index()
    {
        $virtualHouses = VirtualHouse::getAll();
        
        return response()->json($virtualHouses);
    }

    /**
     * Añadir nueva casa virtual
     * @OA\Post (
     *     path="/virtual-houses",
     *     tags={"VirtualHouses"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function store(Request $request)
    {
        $virtualHouse = VirtualHouse::add($request);
        
        return response()->json($virtualHouse);
    }

    /**
     * Mostrar una casa virtual
     * @OA\Get (
     *     path="/virtual-houses/{id}",
     *     tags={"VirtualHouses"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function show($id)
    {
        $virtual_house = VirtualHouse::getById($id);
            
        return response()->json($virtual_house);
    }

    /**
     * Eliminar una casa virtual
     * @OA\Delete (
     *     path="/virtual-houses/{id}",
     *     tags={"VirtualHouses"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="object",
     *             )
     *         )
     *     )
     * )
     */
    public function destroy($id)
    {
        VirtualHouse::remove($id);
    }
}
