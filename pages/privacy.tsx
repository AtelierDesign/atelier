import Head from 'next/head';
import React from 'react';

import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { Navbar } from '@components/Navbar';
import { SmallSpacer } from '@components/SmallSpacer';
import { Spacer } from '@components/Spacer';
import { FooterMain } from '@components/FooterMain';

const PrivacyPolicy = () => {
  return (
    <Box css={{ bc: '$slate1', overflow: 'auto', height: '100vh' }}>
      <Head>
        <title>Privacy.</title>
      </Head>

      <Navbar />

      <Section size="1">
        <Container size="3" css={{ ai: 'center', paddingTop: '100px', margin: 'auto', textAlign: 'center' }}>
          <Heading size="4">Privacy</Heading>
          <Text as="p" css={{ fontWeight: '400', fontSize: '14px', lineHeight: '4', color: '$gray11' }}>
            Terms, Conditions, and Privacy.
          </Text>
        </Container>
      </Section>

      <Section size="2">
        {/* POLICY ONE */}
        <Container size="3" css={{ ai: 'center', paddingTop: '50px', margin: 'auto', textAlign: 'center' }}>
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Definitions.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              <strong>Content.</strong> means the particular media (e.g. image files, video files, audio files,
              templates, project files, data files, etc.) that you license through any Websites, along with any related
              materials, modifications and updates, if any, provided to you by us.
            </p>
            <p>
              <strong>End Product.</strong> means a work created by you into which the Content is to be incorporated
              pursuant to the license granted in these TOU. Examples of End Products include websites, games,
              presentations, online videos, corporate videos, films, television shows and advertisements.
            </p>
            <p>
              <strong>License Fee.</strong> means the fee set forth on the order page.
            </p>
            <p>
              <strong>Use Case.</strong> means the class of use for which the Content is being licensed (i.e. Corporate,
              Commercial, or Personal), commensurate with the License Fee. If no Use Case is specifically defined on the
              order page and/or a single License Fee option, then “Use Case” shall mean the “Personal” or the most
              narrow use of the Content that is otherwise consistent with these TOU.
            </p>
            <p>
              <strong>Website.</strong> means ady.world (or) *.ady.world and other websites.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY TWO */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            License.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              Subject to payment of the License Fee and your compliance with these TOU, we grant you a nonexclusive,
              perpetual, worldwide, non-transferable license to use, reproduce, modify (except as expressly prohibited
              herein), distribute and display the Content solely as incorporated into End Products, subject to the
              limitations set forth herein. Subject to these TOU, including but not limited to the restrictions set
              forth in Sections 5 and 6 hereto, the license granted hereunder shall apply on an unlimited basis and
              shall convey the right to distribute, display or otherwise embody the Content in multiple End Products
              with no further payment to us, provided that all such use is consistent with the Use Case.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY THREE */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Ownership.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              <strong>Content.</strong> As between you and us, we retain all rights, title and interest in and to the
              Content and any derivatives or modifications thereof, in whole or in part. You do not acquire any right,
              title or interest in any Content by virtue of the permitted uses allowed under these TOU, and you shall
              not claim ownership of the Content as incorporated in the End Product through content identification
              systems (e.g., through applying “ContentID” or similar systems to the Content). Any unauthorized
              reproduction or other use of the Content may infringe our or third parties’ copyrights, trademarks,
              privacy or other rights.{' '}
            </p>
            <p>
              <strong>End Product.</strong> You retain all rights, title and interest in and to the End Product other
              than the Content incorporated therein.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY FOUR */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Employer or Client Use.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              You may purchase a license to the Content pursuant to these TOU on behalf of your employer or clients,
              provided that you represent and warrant that you have the authority to bind your employer or clients to
              these TOU. With respect to a client, you must transfer your license to your client via an enforceable
              written agreement that includes terms no less restrictive than these TOU. You are solely responsible and
              liable for use of the Content by your employer or clients. These TOU grant you the right to use the same
              Content for the benefit of other clients in other End Products, subject to the restrictions set forth in
              Section 5.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY FIVE */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Restrictions.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              <strong>YOU MAY NOT.</strong>
            </p>
            <p>
              <strong>1</strong> Use, transfer or otherwise distribute the Content in any way that allows a third party
              to use, download, extract or access the Content as a stand-alone file, either alone or bundled with other
              content, regardless of any modification you make to the Content (for example, you may not modify Content
              and distribute as part of a VJ loop pack, or stylize or recolor Content and present as your own product);
            </p>
            <p>
              <strong>2</strong> Take any action in connection with the Content that infringes the intellectual property
              or other rights of any person or entity;
            </p>
            <p>
              <strong>3</strong> Incorporate the Content into a trademark, logo or service mark or otherwise claim
              trademark or service mark rights in the Content, either alone or as incorporated in the End Product;
            </p>
            <p>
              <strong>4</strong> Use the Content in a pornographic, obscene, defamatory or unlawful manner;
            </p>
            <p>
              <strong>5</strong> Use the Content in an application allowing an end user to customize a digital or
              physical product to their specific needs, such as an “on demand,” “made to order” or “build it yourself”
              application (for example, online video or animation rendering services, slideshow apps and e-card
              generals) unless you purchase a separate license for each final product incorporating the Content that is
              created using the application;
            </p>
            <p>
              <strong>6</strong> Use the Content or any portion thereof for merchandising (for example, screensavers,
              t-shirts or calendars); or
            </p>
            <p>
              <strong>7</strong> Otherwise use or grant rights to the Content in a way that frustrates the intent
              hereof.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY SIX */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Use Case.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              All rights herein granted are conditioned on your use consistent with the Use Case selected at the time of
              licensing the Content. If at any point your Use Case changes or expands to include uses in a Use Case for
              which we charge a higher License Fee, you shall immediately pay to us the difference between the License
              Fee for the original Use Case and the License Fee for the expanded Use Case. Your failure to pay the
              additional License Fee prior to using the Content beyond what is licensed in the original Use Case shall
              constitute a breach hereof, and all rights herein granted shall immediately terminate.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY SEVEN */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Warranties and Representations.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              You warrant and represent that (a) you have the right and authority to enter into these TOU, either
              individually or on behalf of your employer or client, as applicable, and (b) neither the End Product nor
              your use of the Content shall violate any law or infringe upon any common law or statutory rights of any
              third-party, including without limitation contractual rights, copyrights, intellectual property rights and
              privacy rights.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY EIGHT */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Indemnification.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              <strong>Your Indemnification Obligations.</strong> You shall indemnify, defend and hold us and our
              subsidiaries, affiliates, officers, agents, employees, partners, or licensors harmless from any claim,
              demand, loss, or damages, including reasonable attorneys’ fees, arising out of or related to your
              violation of these TOU, the End Product or your use of the Content (except as indemnified by us),
              including without limitation your violation of any common law or statutory rights of any third-party,
              including without limitation contractual rights, copyrights, intellectual property rights and privacy
              rights.
            </p>
            <p>
              <strong>Our Indemnification Obligations.</strong> Provided that the Content is used in accordance with
              these TOU, we will defend any third-party claim, action or legal proceeding made against a person or
              entity during the term of these TOU arising from an alleged infringement by the Content of the
              third-party’s copyright or trademark rights. Notwithstanding the foregoing, we will have no liability to
              you for any claim that arises from (a) any modification of the Content, (b) any combination of the Content
              with any other content, or (c) the context in which you have used the Content.
            </p>
          </Text>

          <SmallSpacer />

          {/* POLICY NINE */}
          <Heading size="1" css={{ textAlign: 'left', fontWeight: '600' }}>
            Disclaimer or Warranties.
          </Heading>
          <Text
            css={{
              textAlign: 'left',
              fontWeight: '400',
              fontSize: '13px',
              lineHeight: '1.5',
              paddingTop: '10px',
              color: '$gray11',
            }}>
            <p>
              The Content is provided “AS-IS.” To the maximum extent permitted by law, we disclaim all warranties,
              express or implied, including the implied warranties of non-infringement, merchantability, and fitness for
              a particular purpose. We make no commitments about the Content. We further disclaim any warranty that (a)
              the Content will meet your requirements or will be constantly available, uninterrupted, timely, secure, or
              error-free; (b) the results obtained from the use of the Content will be effective, accurate, or reliable;
              (c) the quality of the Content will meet your expectations; or (d) any errors or defects in the Content
              will be corrected. We specifically disclaim all liability for any actions resulting from your use of the
              Content. You may use and access the Content at your own discretion and risk.
            </p>
          </Text>
        </Container>
      </Section>

      <Spacer />
      <SmallSpacer />

      <FooterMain />
    </Box>
  );
};

export default PrivacyPolicy;
