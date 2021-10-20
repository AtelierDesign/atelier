import Image from "next/image";
import Header from '../components/header';
import Hero from '../components/hero';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: AnnotationIcon,
  },
]



export default function Headtest() {
  return (
<>
  <Header />
  <div className="crater">
<div className="container xl">
  <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
    {/* Image Row #1 */} {/* FIRST IMAGE */}
    <div className="w-full mb-4 md:w-full lg:w-full px-2">
      <div className="relative image__height rounded-lg bg-gray-100 text-sm text-white flex items-center justify-center">
        <div className="image__overtext">Atelier Design Yield.</div>
        <Image
          src="https://cdn.ady.systems/assets/blk.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </div>


    {/* SECOND IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="relative image__height rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/blk.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 002</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>

    {/* THIRD IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="relative image__height rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/blk.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 002</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>
  </div>
</div>



<div className="py-12 bg-white">
  <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        A better way to send money
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
        accusamus quisquam.
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
</div>
</div>
</>

 );
}
