import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footeralt from '../components/footeralt';
import Section from '../components/section';

export default function DesignSystem() {
  return (
    <>
      <div className="sand__box">
        <div className="design__system">
          <div className="spa__cer"></div>

          {/* Heading Styles */}
          <div>
            <p className="component__announce">HEADING STYLES</p>
          </div>
          <div className="component__label">
            <p>H1</p>
          </div>
          <h1>Atelier Design Yield</h1>
          <div className="component__label">
            <p>H2</p>
          </div>
          <h2>Atelier Design Yield</h2>
          <div className="component__label">
            <p>H3</p>
          </div>
          <h3>Atelier Design Yield</h3>
          <div className="component__label">
            <p>H4</p>
          </div>
          <h4>Atelier Design Yield</h4>
          <div className="component__label">
            <p>H5</p>
          </div>
          <h5>Atelier®</h5>
          <div className="component__label">
            <p>H6</p>
          </div>
          <h6>Atelier®</h6>

          <div className="bump"></div>
          <div className="component__label">
            <p>Normal</p>
          </div>
          <div className="component__label">
            <p>
              <strong>Strong</strong>
            </p>
          </div>

          <div className="spa__cer"></div>

          {/* Paragraph Styles */}
          <div>
            <p className="component__announce">PARAGRAPH STYLES</p>
          </div>
          <div className="component__label">
            <p>Normal</p>
          </div>
          <p>
            This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose text,
            like for example, the kind you might read in a blog post. The reason were using prose
            here is because the most common use case for this container size is longform text. So
            were previewing some longform text here so we can make sure the container width provides
            an optimal line length for this font size.
          </p>
          <div className="bump"></div>

          <div className="component__label">
            <p>Dark</p>
          </div>
          <p className="p_dark">
            This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose text,
            like for example, the kind you might read in a blog post. The reason were using prose
            here is because the most common use case for this container size is longform text. So
            were previewing some longform text here so we can make sure the container width provides
            an optimal line length for this font size.
          </p>
          <div className="bump"></div>

          <div className="component__label">
            <p>Size 2</p>
          </div>
          <p className="p_lg">
            This is a Paragraph size 2. Design in the target medium. Prototype with real components.
            Handoff production code.
          </p>

          <div className="spa__cer"></div>

          {/* Container Styles */}
          <div>
            <p className="component__announce">Containers</p>
          </div>
          <div className="component__label">
            <p>Fluid Container</p>
          </div>
          <div className="des__container_fluid">
            <h2>Heading 2</h2>
            <p>
              This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
              text, like for example, the kind you might read in a blog post. The reason were using
              prose here is because the most common use case for this container size is longform
              text. So were previewing some longform text here so we can make sure the container
              width provides an optimal line length for this font size.
            </p>

            <p>
              This is a Sup and Sub demo. The kind you might read in a blog post.1 This is a really
              long paragraph of text, to demonstrate prose text.1
            </p>

            <p>
              This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
              text, like for example, the kind you might read in a blog post. The reason were using
              prose here is because the most common use case for this container size is longform
              text. So were previewing some longform text here so we can make sure the container
              width provides an optimal line length for this font size.
            </p>
          </div>

          <div className="bump"></div>

          <div className="component__label">
            <p>Large Container</p>
          </div>
          <div className="des__container_lg">
            <h3>Heading 3</h3>
            <p className="p_lg">This is a Sup and Sub demo.</p>
            <p>
              This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
              text, like for example, the kind you might read in a blog post. The reason were using
              prose here is because the most common use case for this container size is longform
              text. So were previewing some longform text here so we can make sure the container
              width provides an optimal line length for this font size.
            </p>
          </div>

          <div className="bump"></div>

          <div className="component__label">
            <p>Medium Container</p>
          </div>
          <div className="des__container_md">
            <h3>Heading 3</h3>
            <p>
              This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
              text, like for example, the kind you might read in a blog post. The reason were using
              prose here is because the most common use case for this container size is longform
              text. So were previewing some longform text here so we can make sure the container
              width provides an optimal line length for this font size.
            </p>
          </div>

          <div className="bump"></div>

          <div className="component__label">
            <p>small Container</p>
          </div>
          <div className="des__container_sm">
            <h4>Heading 4</h4>
            <p>
              This is a Sup and Sub demo. The kind you might read in a blog post.1 This is a really
              long paragraph of text, to demonstrate prose text.1
            </p>

            <p>
              This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
              text, like for example, the kind you might read in a blog post. The reason were using
              prose here is because the most common use case for this container size is longform
              text. So were previewing some longform text here so we can make sure the container
              width provides an optimal line length for this font size.
            </p>
          </div>

          <div className="bump"></div>

          <div className="component__label">
            <p>small Container</p>
          </div>
          <div className="des__container_sm">
            <h5>Heading 5</h5>
            <p>
              This is a Sup and Sub demo. The kind you might read in a blog post.1 This is a really
              long paragraph of text, to demonstrate prose text.1
            </p>

            <p>
              This is a Paragraph size 1. A really long paragraph of text, to demonstrate prose
              text, like for example, the kind you might read in a blog post. The reason were using
              prose here is because the most common use case for this container size is longform
              text. So were previewing some longform text here so we can make sure the container
              width provides an optimal line length for this font size.
            </p>
          </div>

          <div className="bump"></div>
        </div>
      </div>

      {/*End Sandbox*/}

      {/*Section Example*/}
      <div>
        <div className="spa__cer"></div>
        <Section>
          <h2>Section</h2>
          <p>With H2</p>
        </Section>
      </div>

      <div>
        <div className="spa__cer"></div>

        {/*Button Styles*/}
        <div>
          <p className="component__announce">Button Styles</p>
        </div>

        <div className="des__container_sm">
          <button className="bg-lime justify-center rounded-sm border-0 hover:bg-gray-600 text-charcoal w-full mt-3 py-3 px-5">
            <strong>SUBMIT</strong>
          </button>
          <div className="bump"></div>
          <button className="bg-lime justify-center rounded-sm border-0 hover:bg-gray-600 text-charcoal w-full mt-3 py-3 px-5">
            <strong>SUBMIT</strong>
          </button>
          <div className="bump"></div>
        </div>

        <div className="spa__cer"></div>

        {/*Input Styles*/}
        <div>
          <p className="component__announce">Input Styles</p>
        </div>
        <div className="des__container_sm">
          <input
            type="text"
            id="rounded-email"
            className="h-30 rounded-sm border-lime flex-1 appearance-none border-2 w-full py-2 px-5 bg-transparent text-gray-600 placeholder-gray-300 shadow-none text-xl"
            placeholder="Email address"
          />
        </div>

        <div className="spa__cer"></div>
      </div>

      {/*Begin New Sandbox*/}
      {/* FlexBox */}
      <div className="sand__box">
        <div>
          <p className="component__announce">FLEX</p>
        </div>
        <div className="des__container_lg">
          <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
            {/*FIRST IMAGE*/}
            <div className="w-full mb-4 md:w-full lg:w-full px-2">
              <div className="relative image__lg rounded-lg bg-gray-100 text-sm text-white flex items-center justify-center">
                <Image
                  src="https://cdn.ady.systems/assets/green.jpg"
                  alt="One"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            {/* -- */} {/*SECOND IMAGE*/}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
              <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <Image
                  src="https://cdn.ady.systems/assets/bubble_01a.jpg"
                  alt="Two"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Caption Title</div>
              <div className="caption__description">Image Description</div>
            </div>
            {/* -- */} {/*THIRD IMAGE*/}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
              <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <Image
                  src="https://cdn.ady.systems/assets/bubble_01a.jpg"
                  alt="Two"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Caption Title</div>
              <div className="caption__description">Image Description</div>
            </div>
            {/* -- */} {/*FIRST IMAGE*/}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2">
              <div className="relative image__sm rounded-lg bg-gray-100 text-sm text-white flex items-center justify-center">
                <Image
                  src="https://cdn.ady.systems/assets/green.jpg"
                  alt="One"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
            {/* -- */} {/*SECOND IMAGE*/}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2">
              <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <Image
                  src="https://cdn.ady.systems/assets/bubble_01a.jpg"
                  alt="Two"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Caption Title</div>
              <div className="caption__description">Image Description</div>
            </div>
            {/* -- */} {/*THIRD IMAGE*/}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2">
              <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <Image
                  src="https://cdn.ady.systems/assets/bubble_01a.jpg"
                  alt="Two"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Caption Title</div>
              <div className="caption__description">Image Description</div>
            </div>
            {/* -- */} {/*FOURTH IMAGE*/}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2">
              <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <Image
                  src="https://cdn.ady.systems/assets/bubble_01a.jpg"
                  alt="Two"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Caption Title</div>
              <div className="caption__description">Image Description</div>
            </div>
            {/* -- */}
          </div>
        </div>
      </div>
    </>
  );
}