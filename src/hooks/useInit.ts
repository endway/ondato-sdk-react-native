import { FaceTecClient, IdentityClient, KycClient, SessionsClient } from '../api/clients';
import { setAccessToken, setFullAccessToken } from '../modules/sessions/slice';
import { useAppDispatch } from '../core/store';
import { setSetupId } from '../modules/identity/slice';
import { setBackendConfig, setKycId } from '../modules/kyc/slice';
import { mapBackendConfig } from '../modules/kyc/map';
import { useMutation } from 'react-query';
import { DeviceUtils } from '../utils';
import { setFaceTecLicense } from '../modules/face-tec/slice';

const useInit = () => {
  const dispatch = useAppDispatch();

  const mutationFn = async (identityVerificationId: string) => {
    const { accessToken } = await SessionsClient.getAccessToken({ identityVerificationId });
    await dispatch(setAccessToken({ accessToken }));

    const { accessToken: fullAccessToken } = await SessionsClient.getFullAccessToken(identityVerificationId);
    await dispatch(setFullAccessToken({ fullAccessToken }));

    const setup = await IdentityClient.getSetup(identityVerificationId);
    const setupId = setup.steps.find((step) => step.type === 'KycIdentification')?.setupId;
    if (!setupId) throw new Error('KycIdentification setupId not found');
    await dispatch(setSetupId({ setupId }));

    const customerAudits = await DeviceUtils.getCustomerAudits();
    await IdentityClient.setCustomerAudits(identityVerificationId, customerAudits);

    const { id } = await KycClient.getKycId({ setupId, identityVerificationId });
    await dispatch(setKycId({ kycId: id }));

    const configResponse = await KycClient.getConfig(id);
    const backendConfig = mapBackendConfig(configResponse);
    await dispatch(setBackendConfig({ backendConfig }));

    const license = await FaceTecClient.getFaceTecLicense();
    await dispatch(setFaceTecLicense({ license }));
  };

  const { mutateAsync, isLoading } = useMutation(mutationFn);

  return { init: mutateAsync, isLoading };
};

export default useInit;
