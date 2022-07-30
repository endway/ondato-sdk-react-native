import React, { Component, PropsWithChildren } from 'react';
import { StyleSheet, View } from 'react-native';
import { ToastMessage } from '../../components';
import { flex1 } from '../../theme/common';
import { TFunction, withTranslation } from 'react-i18next';

interface Props {
  t: TFunction;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: false };
  }

  closeErrorToast = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { children, t } = this.props;
    const { hasError } = this.state;

    return (
      <View style={[flex1, styles.container]}>
        {hasError && (
          <ToastMessage
            showDuration={5000}
            style={styles.toast}
            onClose={this.closeErrorToast}
            title={t('common.base_error')}
          />
        )}
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  toast: {
    position: 'absolute',
    top: 24,
    left: 16,
    right: 16,
    zIndex: 99,
    elevation: 4,
  },
});

export default withTranslation()(ErrorBoundary);
