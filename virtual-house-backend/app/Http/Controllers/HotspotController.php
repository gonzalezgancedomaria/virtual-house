<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotspot;

class HotspotController extends Controller
{
    /**
     * Listado de los sensores
     * @OA\Get (
     *     path="/hotspots",
     *     tags={"Hotspots"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="array",
     *                 property="hotspots",
     *                 @OA\Items(
     *                     type="object",
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function index(Request $request)
    {
        $hostpots = Hotspot::getAll();
        
        return response()->json($hostpots);
    }

    /**
     * Añadir nuevo sensor
     * @OA\Post (
     *     path="/hotspots",
     *     tags={"Hotspots"},
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
        $hostpot = Hotspot::add($request);
        
        return response()->json($hostpot);
    }
    
    /**
     * Mostrar un sensor
     * @OA\Get (
     *     path="/hotspots/{id}",
     *     tags={"Hotspots"},
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
        $hostpot = Hotspot::getById($id);
        
        return response()->json($hostpot);
    }

    /**
     * Eliminar un sensor
     * @OA\Delete (
     *     path="/hotspots/{id}",
     *     tags={"Hotspots"},
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
        Hotspot::remove($id);
    }
}
