import { ChevronDownIcon, SettingsIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useColorModeValue,
  useBoolean,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { languages } from '../../next-i18next.config';
import { primaryColor } from '../../lib/chakra/colors';
import PATHS from '../../config/paths';

function Settings(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonsBg = useColorModeValue(primaryColor.light, primaryColor.dark);
  const { push } = useRouter();
  const btnRef = useRef();
  const { t } = useTranslation('common');

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [loading, setLoading] = useBoolean(false);

  const handleSave = (): void => {
    const selectedLang = languages.SUPPORT_LANGUAGE.find(
      (lang) => lang.long === selectedLanguage,
    ).short;

    setLoading.on();
    push(PATHS.home, null, { locale: selectedLang })
      .then(setLoading.off);
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label={t('settingsIconLabel')}
        backgroundColor={buttonsBg}
        bottom="20px"
        colorScheme="whatsapp"
        icon={<SettingsIcon />}
        onClick={onOpen}
        position="fixed"
        right="20px"
      />
      <Drawer
        closeOnEsc={!loading}
        closeOnOverlayClick={!loading}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton isDisabled={loading} />
          <DrawerHeader>{t('settingsHeader')}</DrawerHeader>

          <DrawerBody>
            <Menu>
              <MenuButton as={Button} isDisabled={loading} rightIcon={<ChevronDownIcon />}>
                {selectedLanguage || t('selectLang')}
              </MenuButton>
              <MenuList>
                {languages.SUPPORT_LANGUAGE.map((lang) => (
                  <MenuItem
                    key={lang.short}
                    onClick={(): void => setSelectedLanguage(lang.long)}
                  >
                    {lang.long}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </DrawerBody>

          <DrawerFooter>
            <Button isDisabled={loading} mr={3} onClick={onClose} variant="outline">
              {t('settingsCancel')}
            </Button>
            <Button
              backgroundColor={buttonsBg}
              colorScheme="whatsapp"
              isLoading={loading}
              onClick={handleSave}
            >
              {t('settingsSave')}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Settings;
