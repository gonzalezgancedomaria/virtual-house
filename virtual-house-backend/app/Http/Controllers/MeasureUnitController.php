<?php

namespace App\Http\Controllers;

use App\Models\MeasureUnit;

class MeasureUnitController extends Controller
{

    /**
     * Listado de unidades de medida
     * @OA\Get (
     *     path="/measure-units",
     *     tags={"MeasureUnits"},
     *     @OA\Response(
     *         response=200,
     *         description="OK",
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 type="array",
     *                 property="rows",
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
        $virtualHouses = MeasureUnit::getAll();
        
        return response()->json($virtualHouses);
    }

}
