import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  Divider,
  FormHelperText,
  Box,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useStyles from './style';
import useThemeStyles from 'src/themes/styles';
import { AlertAction, Props } from './types';

const AlertDialog = (props: Props) => {
  const {
    title,
    description,
    content,
    onResult,
    validate,
    yesNo = false,
    variant = 'info',
    showCancelButton = true,
    confirmButtonText = yesNo ? 'Yes' : 'OK',
    cancelButtonText = yesNo ? 'No' : 'Cancel',
  } = props;

  const [open, setOpen] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const classes = useStyles();
  const classesTheme = useThemeStyles();
  const { t } = useTranslation();

  const submit = useCallback(
    async (action: AlertAction) => {
      if (action === AlertAction.CANCEL) {
        setOpen(false);
        onResult?.({ action });
      } else {
        try {
          const data = await validate?.();
          setOpen(false);
          setErrorMsg('');
          onResult?.({ action, data });
        } catch (error) {
          setErrorMsg(error.message);
        }
      }
    },
    [onResult, validate],
  );

  const handleClose = useCallback(() => submit(AlertAction.CANCEL), [submit]);

  return (
    <Dialog
      maxWidth='xs'
      classes={{ paper: classesTheme.dialogPaper, paperWidthXs: classes.paperWidthXs }}
      PaperProps={{ classes: { root: classesTheme.paperRounded } }}
      open={open}
      onClose={handleClose}
    >
      <IconButton className={classesTheme.iconButton} onClick={handleClose}>
        <CloseIcon />
      </IconButton>

      {title && (
        <>
          <DialogTitle classes={{ root: classes.dialogTitleRoot }}>{title}</DialogTitle>
          <Divider classes={{ middle: classes.middle }} variant='middle' light />
        </>
      )}

      <DialogContent classes={{ root: classes.dialogContentRoot }}>
        {description && (
          <DialogContentText
            classes={{ root: classes.dialogContentText }}
            component='div'
            align={content ? 'inherit' : 'center'}
          >
            {description}
          </DialogContentText>
        )}

        {!!content && <Box mb={{ xs: 2, md: 4 }}>{content}</Box>}

        {!!errorMsg && (
          <FormHelperText className={classes.errorMessage} error>
            {errorMsg}
          </FormHelperText>
        )}

        <Grid container spacing={2} className={classes.gridContainer}>
          {showCancelButton && (
            <Grid item xs>
              <Button
                className={classes.button}
                variant='contained'
                fullWidth
                onClick={handleClose}
              >
                {t(cancelButtonText)}
              </Button>
            </Grid>
          )}

          <Grid item xs>
            <Button
              className={classes.button}
              variant='contained'
              fullWidth
              onClick={() => submit(AlertAction.CONFIRM)}
              color={variant === 'danger' ? 'primary' : 'secondary'}
            >
              {t(confirmButtonText)}
            </Button>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AlertDialog;
