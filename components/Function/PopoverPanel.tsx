import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import { Link } from '@atelier/link';
import { LimeButton } from '@components/Buttons/LimeButton';
import { styled } from '@stitches/react';

const Dropdown = styled('div', {
  // display: 'none',
  zIndex: '9999',
  position: 'absolute',
  top: '10',
  right: '0',
  left: '0',
  backgroundColor: '$light100',
  backdropFilter: 'blur(18px), saturate(180%)',

  height: 'auto',
  width: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingBottom: '30px',
  paddingTop: '30px',
  margin: 'auto',
  marginTop: '13px',

  borderBottomLeftRadius: '20px',
  borderBottomRightRadius: '20px',

  // TYPOGRAPHY
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '600',
  color: '$gray12',
});

const solutions = [
  {
    name: 'Insights',
    description: 'Measure actions your users take',
    href: '##',
    icon: IconOne,
  },
  {
    name: 'Automations',
    description: 'Create your own targeted content',
    href: '##',
    icon: IconTwo,
  },
  {
    name: 'Reports',
    description: 'Keep track of your growth',
    href: '##',
    icon: IconThree,
  },
];

export const PopoverPanel = () => {
  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button as="a">
              <Link
                variant="subtle"
                css={{
                  display: 'none',
                  fontSize: '13px',
                  color: '$white',
                  backgroundColor: '$lime9',
                  border: '0px solid $crimson9',
                  borderRadius: '6px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  mr: '$3',
                  '@sm': { display: 'block', marginRight: '$2', marginLeft: '0' },
                  '&:hover': { cursor: 'pointer' },
                }}>
                <span>Menu</span>
              </Link>
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel as="div">
                <Dropdown>
                  <div>
                    <div>
                      {solutions.map(item => (
                        <a key={item.name} href={item.href}>
                          <div>
                            <item.icon aria-hidden="true" />
                          </div>
                          <div>
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div>
                      <a>
                        <span>
                          <span>Documentation</span>
                        </span>
                        <span>Start integrating products and tools</span>
                      </a>
                    </div>
                  </div>
                </Dropdown>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

function IconOne() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z" stroke="#FB923C" strokeWidth="2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}