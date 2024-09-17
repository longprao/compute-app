import { ToastContext } from 'contexts'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { TemplateInput } from 'types/template'
import { Credential } from 'types/credential'

export const templateValidationSchema = yup.object().shape({
  container_image: yup.string().required('Please enter container image'),
  volume_disk: yup.number().nullable(),
  container_disk: yup.number().nullable(),
})

const useCreateTemplate = () => {
  const { setToast } = useContext(ToastContext)
  const navigate = useNavigate()

  // const { createTemplate, loading: create_template_loading } = useCreateTemplateService()

  // const { data: credentials } = useGetCredentials()
  const credentials: any[] = []

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      template_visibility: 'private',
      template_type: 'pod',
      compute_type: 'nvidia gpu',
      container_start_command: '',
      container_image: '',
      container_disk: 5,
      volume_disk: 0,
      volume_mount_path: '',
      expose_http_ports: '',
      expose_tcp_ports: '',
      credential: null,
      environment_variables: {
        env: [],
      },
    },
    validationSchema: templateValidationSchema,
    onSubmit: values => handleSubmit(values),
  })

  async function handleSubmit(values: TemplateInput) {
    const data = {
      ...values,
      credential: values.credential?.length === 0 ? null : values.credential,
      environment_variables: {
        env: values.environment_variables.env.filter(i => i.key && i.value),
      },
    }
    // const result = await createTemplate(data)

    // if (result) {
    //   setToast({
    //     message: result.message,
    //     type: result.success ? 'positive' : 'warning',
    //     open: true,
    //   })

    //   if (result.success) {
    //     navigate(`/templates/edit/${result.template.id}`)
    //   }
    // }
  }

  const credentialsList = credentials.map((item: Credential) => ({
    label: item.credential_name,
    value: item.id,
  }))

  return {
    formik,
    create_template_loading: false,
    credentials: credentialsList,
  }
}

export default useCreateTemplate
