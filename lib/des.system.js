import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Footeralt from '../components/footeralt';
import Section from '../components/section';
import Codebox from '../components/codebox';
import ButtonComponents from '../components/buttons/buttoncomps';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

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
          <div className="bump"></div>
          <ButtonComponents />
          <div className="bump"></div>
        </div>

        <Codebox>
          <pre>
            <code className="js">
{`
  export default function ButtonComponents({ children, ...props }) {
    return (
  <>
  <div className="des__container_sm">
    <Row className="row__justify__production">
      <Button className="button__one" as={Col} variant="primary">
        <strong>Ady</strong>®Store
      </Button>
      <Button className="button__two" as={Col} variant="secondary">
        <strong>Ady</strong>®Store
      </Button>
      <Button className="button__three" as={Col} variant="success">
        <strong>Ady</strong>®Store
      </Button>
      <Button className="button__four" as={Col} variant="success">
        <strong>Ady</strong>®Store
      </Button>
    </Row>

    <div className="bump"></div>


      <Button className="block__button" variant="primary" size="lg">
        ATELIER DESIGN YIELD®
      </Button>
      <Button className="block__button__secondary" variant="primary" size="lg">
        ATELIER DESIGN YIELD®
      </Button>

  </div>
  </>

    );
  }
`}
          </code>
        </pre>
        </Codebox>

        <div className="spa__cer"></div>

        {/*Input Styles*/}
        <div>
          <p className="component__announce">Input Styles</p>
        </div>
        <div className="production__container_lg">
          <div className="input__group">
          <InputGroup size="sm">
            <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
            <br></br>
            <FormControl className="glass__input" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Email address" />
          </InputGroup>
          </div>
        </div>

        <Codebox>
          <pre>
            <code className="js">
{`
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function Input() {
  return (
    <>
    <div className="center__div">
      <div className="production__container_lg">
        <div className="input__group">
          <InputGroup size="sm">
          <InputGroup.Text id="inputGroup-sizing-sm"><h4>Subscribe</h4></InputGroup.Text>
          <br></br>
          <FormControl className="glass__input" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Email address" />
          </InputGroup>
        </div>
      </div>
    </div>
</>
  );
}
`}
          </code>
        </pre>
        </Codebox>

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
