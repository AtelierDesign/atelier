import { Container } from '@atelier/container';
import { Grid } from '@atelier/grid';
import { Box } from '@atelier/box';
import NextLink from 'next/link';
import { LogoLink } from '@components/LogoLink';
import { Root as AccessibleIcon } from '@radix-ui/react-accessible-icon';
import { InteroperableLogo } from '@components/Framework/InteroperableLogo';

export const LogoSlide = () => {
  return (
    <>
      {/* USE CASE LOGO SLIDE */}
      <Container
        size="3"
        css={{
          position: 'relative',
          overflowX: 'scroll',
          overflowY: 'hidden',
          WebkitOverflowScrolling: 'touch',
          MsOverflowStyle: 'none',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },

          // Add some padding so that logos aren't clipped when focused.
          py: '$3',
          my: '-$3',
        }}>
        <Grid flow="column" align="center" justify="start" gap="6">
          <NextLink href="/case-studies/acid-tango" passHref>
            <LogoLink css={{ mb: -8 }}>
              <AccessibleIcon label="Acid Tango case study">
                <InteroperableLogo variant="Acid Tango" width="165" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/atom-learning" passHref>
            <LogoLink css={{ mb: 4 }}>
              <AccessibleIcon label="Atom Learning case study">
                <InteroperableLogo variant="Atom Learning" width="86" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/basedash" passHref>
            <LogoLink css={{ mb: -2 }}>
              <AccessibleIcon label="Basedash case study">
                <InteroperableLogo variant="Basedash" width="135" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/basement-studio" passHref>
            <LogoLink css={{ mb: -2 }}>
              <AccessibleIcon label="basement.studio case study">
                <InteroperableLogo variant="basement.studio" width="120" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/magnetis" passHref>
            <LogoLink css={{ mb: -12 }}>
              <AccessibleIcon label="Magnetis case study">
                <InteroperableLogo variant="Magnetis" width="111" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/supabase" passHref>
            <LogoLink css={{ mb: -8 }}>
              <AccessibleIcon label="Supabase case study">
                <InteroperableLogo variant="Supabase" width="140" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          <NextLink href="/case-studies/university-of-amsterdam" passHref>
            <LogoLink css={{ mt: 7 }}>
              <AccessibleIcon label="University of Amsterdam case study">
                <InteroperableLogo variant="University of Amsterdam" width="152" />
              </AccessibleIcon>
            </LogoLink>
          </NextLink>

          {/* Horizontal scroll spacer */}
          <Box css={{ width: 1, height: 1 }} />
        </Grid>
      </Container>
    </>
  );
};
