import { Planet } from 'react-planet';
import { Box } from '@atelier-dsgn/box';

export const PlanetMenu = () => {
  return (
    <Planet
      dragablePlanet
      dragRadiusPlanet={20}
      bounce
      centerContent={
        <Box
          css={{
            height: '100px',
            width: '100px',
            borderRadius: '50%',
            backgroundColor: '#1da8a4',
          }}
        />
      }
      open
      autoClose>
      <Box
        css={{
          height: '70px',
          width: '70px',
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
      />
      <Box
        css={{
          height: '70px',
          width: '70px',
          borderRadius: '50%',
          backgroundColor: '#9257ad',
        }}
      />
    </Planet>
  );
};
