import Link from 'next/link';
import { styled } from 'stitches.config';

// This creates a custom component that wraps an <a> tag

export const DefaultLink = styled('a', {
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '700',
});

export function LinkStyle({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <DefaultLink>{name}</DefaultLink>
    </Link>
  );
}

export default LinkStyle;

{
  /* <!--
<LinkStyle href="##" passHref>
  <a>Text</a>
</LinkStyle>
--> */
}
