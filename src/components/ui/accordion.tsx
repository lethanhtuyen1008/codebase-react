import * as React from 'react';
import { useState } from 'react';

import {
  Accordion as MuiAccordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  AccordionProps,
} from '@mui/material';

import kebabCase from 'lodash/kebabCase';

import { IconPlus, IconMinus } from '@tabler/icons';

interface Props extends AccordionProps {
  id?: string;
  title: string;
}

const Accordion: React.FC<Props> = ({
  id,
  title,
  children,
  defaultExpanded = false,
  ...others
}) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  const expandIcon = expanded ? (
    <IconMinus stroke={1.5} size='18px' color='text.primary' />
  ) : (
    <IconPlus stroke={1.5} size='18px' color='text.primary' />
  );

  const handleChange = (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  id = id || kebabCase(title);

  return (
    <MuiAccordion
      elevation={0}
      sx={{
        borderTop: (theme) => `solid 1px ${theme.palette.grey[400]}`,
        borderRadius: '0 !important',
        '&:before': {
          opacity: '0 !important',
          content: '""',
        },
      }}
      {...others}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        sx={{ p: 0 }}
        expandIcon={expandIcon}
        aria-controls={`${id}-header`}
        id={`${id}-content`}
      >
        <Typography
          variant='h3'
          className='ff-secondary-italic'
          sx={{
            width: '66%',
            flexShrink: 0,
            fontWeight: 'bold',
            fontSize: (theme) => {
              return {
                xs: theme.typography.pxToRem(24),
              };
            },
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
