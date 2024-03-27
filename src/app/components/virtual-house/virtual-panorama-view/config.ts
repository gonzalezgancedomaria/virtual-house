export let config = {
  scenes: [
    {
      id: 'vestibulo',
      title: 'Vestíbulo',
      panorama: '/assets/titles/vestibulo/IMG_1756.jpg',
      hotSpots: [
        {
          type: 'scene',
          pitch: 1,
          yaw: 70,
          text: 'Salón',
          sceneId: 'salon',
          id: 'hotspot-escena-vestibulo-salon',
        },
        {
          type: 'scene',
          pitch: 1,
          yaw: 45,
          text: 'Escaleras',
          sceneId: 'escaleras',
          id: 'hotspot-escena-vestibulo-escaleras',
        }
      ],
    },
    {
      id: 'salon',
      title: 'Salón',
      panorama: '/assets/titles/salon/IMG_1767.jpg',
      hotSpots: [
        {
          type: 'scene',
          pitch: 1,
          yaw: 200,
          text: 'Cocina',
          sceneId: 'cocina',
          id: 'hotspot-escena-salon-vestibulo',
        },
        {
          type: 'scene',
          pitch: 12,
          yaw: 40,
          text: 'Escaleras',
          sceneId: 'escaleras',
          id: 'hotspot-escena-salon-cocina',
        },
      ],
    },
    {
      id: 'cocina',
      title: 'Cocina',
      panorama: '/assets/titles/cocina/IMG_1774.jpg',
      hotSpots: [
        {
          type: 'scene',
          pitch: 22,
          yaw: 0,
          text: 'Patio',
          sceneId: 'patio',
          id: 'hotspot-escena-cocina-patio',
        },
        {
          type: 'scene',
          pitch: 1,
          yaw: 160,
          text: 'Salón',
          sceneId: 'salon',
          id: 'hotspot-escena-cocina-salon',
        },
      ],
    },
    {
      id: 'patio',
      title: 'Patio',
      panorama: '/assets/titles/patio/IMG_1785.jpg',
      hotSpots: [
        {
          type: 'scene',
          pitch: 1,
          yaw: 170,
          text: 'Cocina',
          sceneId: 'cocina',
          id: 'hotspot-escena-patio-cocina',
        },
      ],
    },
    {
      id: 'escaleras',
      title: 'Escaleras',
      panorama: '/assets/titles/escaleras/IMG_1751.jpg',
      hotSpots: [
        {
          type: 'scene',
          pitch: 1,
          yaw: 65,
          text: 'Cocina',
          sceneId: 'cocina',
          id: 'hotspot-escena-escaleras-cocina',
        },
        {
          type: 'scene',
          pitch: 1,
          yaw: -10,
          text: 'Habitación 1',
          sceneId: 'habitacion-1',
          id: 'hotspot-escena-escaleras-habitacion-1',
        },
      ],
    },
    {
      id: 'habitacion-1',
      title: 'Habitación 1',
      panorama:
        'assets/titles/maria/IMG_1822.jpg',
      hotSpots: [
      ],
    },
  ],
};
