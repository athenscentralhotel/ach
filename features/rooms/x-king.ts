import xKing_1 from '../../public/hotel_images/xKing/x-king-1.jpg';
import xKing_2 from '../../public/hotel_images/xKing/x-king-2.jpg';
import xKing_3 from '../../public/hotel_images/xKing/x-king-3.jpg';
import xKing_4 from '../../public/hotel_images/xKing/x-king-4.jpg';
import xKing_5 from '../../public/hotel_images/xKing/x-king-5.jpg';
import xKing_6 from '../../public/hotel_images/xKing/x-king-6.jpg';
import xKing_7 from '../../public/hotel_images/xKing/x-king-7.jpg';
import { MainDescription, RoomData, RoomType } from './types';

const mainDescriptionArray: MainDescription[] = [
  {
    id: '1',
    value:
      'Modern and luxurious designed king-sized guest room with a sitting area looking out the floor-to-ceiling picture windows and heated hard floors.',
  },
  {
    id: '2',
    value:
      'Relax and watch a movie on the 65-inch 4K smart TV and stay connected with high-speed internet. The ensuite super modern bath features a waterfall shower with enclosed barn style glass doors and the comfort of plush towels. Additional amenities include a microwave, a mini fridge with complimentary beverages and coffeemaker for freshly brewed coffee or tea.',
  },
];

const truncatedDescription =
  'With 65-inch 4K Smart TV, Free High-speed internet, 1 block to uptown Court Street';
const capacity = 'Sleeps 2 adults plus 1 child';

export const xKing_data: RoomData = {
  roomType: RoomType.xKing,
  roomName: 'Deluxe Luxury King',
  capacity,
  truncatedDescription,
  mainDescriptionArray,
  amenities: [],
  pictureSlice: [
    {
      id: '2',
      url: xKing_4,
      description:
        'one king bed with two comfy chairs, set in front of a large picture window overlooking the street level',
      imageClasses: 'brightness-[1.02] contrast-[0.96]',
      priority: true,
    },
    {
      id: '0',
      url: xKing_1,
      description:
        'one king bed with two comfy chairs, set in front of a large picture window overlooking the street level',
      imageClasses: 'brightness-[1.3] saturation-[1.05] contrast-[0.88]',
      priority: true,
    },
    {
      id: '1',
      url: xKing_3,
      description:
        'artistic shot of upgraded, stainless steel waterfall and body shower, with oval barn-style door',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.92]',
      priority: true,
    },
    {
      id: '3',
      url: xKing_5,
      description:
        'artistic shot of upgraded, stainless steel waterfall and body shower, with oval barn-style door',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.92]',
      priority: true,
    },
    {
      id: '4',
      url: xKing_6,
      description:
        'artistic shot of upgraded, stainless steel waterfall and body shower, with oval barn-style door',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.92]',
      priority: true,
    },
    {
      id: '5',
      url: xKing_7,
      description:
        'artistic shot of upgraded, stainless steel waterfall and body shower, with oval barn-style door',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.92]',
      priority: true,
    },
    {
      id: '6',
      url: xKing_2,
      description:
        'artistic shot of upgraded, stainless steel waterfall and body shower, with oval barn-style door',
      imageClasses: 'brightness-[1.19] saturation-[1.13] contrast-[0.92]',
      priority: true,
    },
  ],
};
