export let config = {
  scenes: [
    {
      id: 'vestíbulo',
      title: 'Vestíbulo',
      panorama: '/assets/titles/vestibulo/IMG_1756.jpg',
      hotSpots: [
        {
          type: 'scene',
          pitch: 1,
          yaw: 70,
          text: 'Salón',
          sceneId: 'salón',
          id: 'hotspot-escena-vestíbulo-salón',
        },
        {
          type: 'scene',
          pitch: 1,
          yaw: 45,
          text: 'Escaleras',
          sceneId: 'escaleras',
          id: 'hotspot-escena-vestíbulo-escaleras',
        }
      ],
    },
    {
      id: 'salón',
      title: 'Salón',
      panorama: '/assets/titles/salon/IMG_1767.jpg',
      hotSpots: [
        {
          type: 'scene',
          pitch: 1,
          yaw: 220,
          text: 'Cocina',
          sceneId: 'cocina',
          id: 'hotspot-escena-salón-vestíbulo',
        },
        {
          type: 'scene',
          pitch: 1,
          yaw: 40,
          text: 'Escaleras',
          sceneId: 'escaleras',
          id: 'hotspot-escena-salón-cocina',
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
          pitch: 1,
          yaw: 90,
          text: 'Patio',
          sceneId: 'patio',
          id: 'hotspot-escena-cocina-patio',
        },
        {
          type: 'scene',
          pitch: 1,
          yaw: -90,
          text: 'Salón',
          sceneId: 'salón',
          id: 'hotspot-escena-cocina-salón',
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
          yaw: 90,
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
      ],
    },
    {
      id: 'habitación-1',
      title: 'Habitación 1',
      panorama:
        'assets/titles/maria/IMG_1822.jpg',
      hotSpots: [
      ],
    },
  ],
};
