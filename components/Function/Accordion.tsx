import React, { createRef } from 'react';
import { keyframes } from '@stitches/react';
import { styled } from 'stitches.config';
import { violet, blackA, mauve, slate, gray, lime } from '@radix-ui/colors';
import { ChevronDownIcon } from '@radix-ui/react-icons';

// ATELIER® DESIGN SYSTEM
import { Heading } from '@atelier/heading';

// Accordion Component
import * as AccordionPrimitive from '@radix-ui/react-accordion';

const AccordionContainer = styled('div', {
  backgroundColor: '$translucent',
  width: '100%',
  alignItems: 'center',
  margin: 'auto',
});

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledAccordion = styled(AccordionPrimitive.Root, {
  border: '3px solid $slate5',
  borderRadius: '19px',
  width: '100%',
  backgroundColor: '$translucent',
  boxShadow: '0 2px 8px $blackA4',
});

const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  backgroundColor: '$slate3',

  '&:first-child': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px',
  },

  '&:last-child': {
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px',
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $mauve12',
  },
});

const StyledHeader = styled(AccordionPrimitive.Header, {
  paddingTop: '3px',
  borderRadius: '16px',
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  fontFamily: '$inter',
  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: '45px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1',
  color: '$gray12',
  // boxShadow: '2 22px 0 $mauve6',
  '&[data-state="closed"]': { backgroundColor: '$slate2' },
  '&[data-state="open"]': { backgroundColor: '$slate1' },
  '&:hover': { backgroundColor: '$slate1' },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$slate12',
  backgroundColor: '$slate3',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled('div', {
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '500',
  padding: '15px 20px',
});

const StyledChevron = styled(ChevronDownIcon, {
  color: '$lime9',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

// Exports
export const Accordion = StyledAccordion;
export const AccordionItem = StyledItem;

/*
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;

//
// TRIGGER COMPONENT
export const AccordionTrigger = React.forwardRef((props, ref) => (

const ref = React.createRef();
  <StyledHeader>
    <StyledTrigger ref={ref}>
      {props.children}
      <StyledChevron aria-hidden />
    </StyledTrigger>
  </StyledHeader>
));
*/

// TRIGGER COMPONENT
export const AccordionTrigger = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledHeader>
      <StyledTrigger {...props} ref={ref}>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  );
});

// CONTENT
export const AccordionContent = React.forwardRef(({ children, ...props }, ref) => {
  return (
    <StyledContent {...props} ref={ref}>
      <StyledContentText>{props.children}</StyledContentText>
    </StyledContent>
  );
});

// THE ACCORDION
export const AccordionComponent = props => {
  return (
    <>
      <AccordionContainer>
        <Heading
          size="1"
          css={{
            paddingBottom: '30px',
            fontSize: '14px',
            fontFamily: '$neuewide',
            fontWeight: '800',
            textTransform: 'uppercase',
          }}>
          Frequently asked
        </Heading>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Atelier Design Yield?</AccordionTrigger>
            <AccordionContent>Simply put, it's the coolest shit ever.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>
              Yes. It's unstyled by default, giving you freedom over the look and feel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARAI design pattern.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContainer>
    </>
  );
};

export default AccordionComponent;
