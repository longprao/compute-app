import Box from '@mui/material/Box';
import Dropdown from 'components/Dropdown';

import FormikTextField from 'components/TextFieldFormik';
import TextareaFormik from 'components/TextareaFormik';
import { FormikProvider } from 'formik';
import styled from 'styled-components';

import { StyledFormInputWrapper } from 'styles/formStyles.css';
import { StyledPanelWrapper } from 'styles/panelStyles.css';

import { Credential } from 'types/credential';

const Settings = ({ formik }: { formik: any }) => {
  // const { data: credentials } = useGetCredentials()
  const credentials: any[] = [];

  const credentialsList = credentials.map((item: Credential) => ({
    label: item.credential_name,
    value: item.id,
  }));

  return (
    <FormikProvider value={formik}>
      <StyledPanelWrapper>
        <StyledFormInputWrapper noPadding style={{ paddingLeft: '5px' }}>
          <StyledGrid>
            <FormikTextField
              name="template_config.template_data.container_image"
              placeholder={'Container Image'}
              label={'Container Image'}
            />
            <Dropdown
              label={'Container Registry Credentials'}
              fieldName={'template_config.template_data.credential'}
              setFieldValue={formik?.setFieldValue}
              fieldValue={formik.values.template_config?.template_data?.credential}
              options={credentialsList}
              optionSize={'small'}
              size={'small'}
              labelGap={4}
            />
          </StyledGrid>

          <TextareaFormik
            setFieldValue={(field: string, value: string) => formik.setFieldValue(field, value)}
            label={'Container Start Command'}
            value={formik.values.template_config?.template_data?.container_start_command}
            fieldName={'template_config.template_data.container_start_command'}
          />

          <StyledGrid>
            <StyledGroup>
              <FormikTextField
                name="template_config.template_data.container_disk"
                placeholder={'Container Disc'}
                label={'Container Disc'}
              />

              {formik.values.template_config?.template_data?.compute_type !== 'cpu' && (
                <FormikTextField
                  name="template_config.template_data.volume_disk"
                  placeholder={'Volume Disc'}
                  label={'Volume Disc'}
                />
              )}
            </StyledGroup>

            {formik.values.template_config?.template_data?.compute_type !== 'cpu' && (
              <FormikTextField
                name="template_config.template_data.volume_mount_path"
                placeholder={'Volume Mount Path'}
                label={'Volume Mount Path'}
              />
            )}
          </StyledGrid>

          <StyledGrid>
            <FormikTextField
              name="template_config.template_data.expose_http_ports"
              placeholder={'Expose HTTP Ports (Max 10)'}
              label={'Expose HTTP Ports (Max 10)'}
            />
            <FormikTextField
              name="template_config.template_data.expose_tcp_ports"
              placeholder={'Expose TCP Ports'}
              label={'Expose TCP Ports'}
            />
          </StyledGrid>
        </StyledFormInputWrapper>
      </StyledPanelWrapper>
    </FormikProvider>
  );
};

export default Settings;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`

const StyledGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`
