<script>
    import { toCSSVar } from '@chakra-ui/styled-system';
    import { injectGlobal } from '$lib/core';
    import { theme as baseTheme, themeStore } from '$lib/theme';

    export let theme = {};

    themeStore.set(theme);

    injectGlobal({
        'html, body': {
            margin: 0,
            padding: 0,
        },
        ':host, :root, [data-theme]': toCSSVar({
            ...baseTheme,
            ...theme
        }).__cssVars
    });
</script>

<slot />
