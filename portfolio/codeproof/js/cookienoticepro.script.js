/*
 * Copyright (c) 2024 Flerosoft (https://flerosoft.com)
 * Software Name: Cookie Notice Pro - jQuery Plugin
 * Product Page : https://cookienoticepro.flerosoft.com
 * Documentation: https://cookienoticepro.flerosoft.com/docs
 * Description: Cookie Notice Pro, a lightweight jQuery plugin, helps you to comply with GDPR.
Make your own cookie information popup in minutes.
 * Changelog: https://cookienoticepro.flerosoft.com/docs/getting-started#item-1-4
*/

;(function ($) {
  'use strict'

  const settingsIcon =
    ''
    const cookieIcon =
    '<svg width="297" height="129" viewBox="0 0 297 129" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_8_252)"> <path d="M11.5822 118.83V122.12C11.5822 126.079 9.60195 128.346 5.79495 128.346C1.98795 128.346 0.00769043 126.087 0.00769043 122.12V109.245C0.00769043 105.286 1.98795 103.018 5.79495 103.018C9.60195 103.018 11.5822 105.278 11.5822 109.245V111.651H7.91336V108.999C7.91336 107.231 7.13815 106.562 5.90241 106.562C4.66666 106.562 3.89145 107.231 3.89145 108.999V122.366C3.89145 124.134 4.66666 124.772 5.90241 124.772C7.13815 124.772 7.91336 124.134 7.91336 122.366V118.83H11.5822Z" fill="white"/> <path d="M15.8881 109.245C15.8881 105.286 17.9681 103.019 21.7828 103.019C25.5975 103.019 27.6775 105.278 27.6775 109.245V122.12C27.6775 126.079 25.5975 128.346 21.7828 128.346C17.9681 128.346 15.8881 126.087 15.8881 122.12V109.245ZM19.7718 122.366C19.7718 124.134 20.547 124.803 21.7828 124.803C23.0185 124.803 23.7937 124.134 23.7937 122.366V108.999C23.7937 107.231 23.0185 106.562 21.7828 106.562C20.547 106.562 19.7718 107.231 19.7718 108.999V122.366Z" fill="white"/> <path d="M32.444 103.311H38.5843C42.4681 103.311 44.3716 105.471 44.3716 109.429V121.951C44.3716 125.91 42.4681 128.07 38.5843 128.07H32.444V103.318V103.311ZM36.3277 106.847V124.526H38.5152C39.751 124.526 40.4955 123.888 40.4955 122.12V109.245C40.4955 107.477 39.751 106.839 38.5152 106.839H36.3277V106.847Z" fill="white"/> <path d="M52.9987 113.742H58.3331V117.277H52.9987V124.526H59.707V128.062H49.1149V103.311H59.707V106.847H52.9987V113.742Z" fill="white"/> <path d="M75.8714 109.422V112.642C75.8714 116.601 73.9679 118.761 70.0842 118.761H68.2498V128.062H64.366V103.311H70.0842C73.9679 103.311 75.8714 105.471 75.8714 109.429V109.422ZM68.2498 106.847V115.225H70.0842C71.3199 115.225 71.9877 114.656 71.9877 112.888V109.176C71.9877 107.408 71.3199 106.839 70.0842 106.839H68.2498V106.847Z" fill="white"/> <path d="M88.2289 128.062C88.0139 127.424 87.8758 127.04 87.8758 125.018V121.129C87.8758 118.83 87.1006 117.985 85.3352 117.985H83.992V128.062H80.1083V103.311H85.9723C89.9942 103.311 91.7288 105.186 91.7288 109.007V110.951C91.7288 113.496 90.9152 115.156 89.1883 115.971C91.1302 116.786 91.7672 118.661 91.7672 121.236V125.057C91.7672 126.256 91.8056 127.14 92.1894 128.062H88.2365H88.2289ZM83.992 106.847V114.449H85.5118C86.9624 114.449 87.8451 113.811 87.8451 111.835V109.399C87.8451 107.631 87.2464 106.854 85.8648 106.854H83.992V106.847Z" fill="white"/> <path d="M96.242 109.245C96.242 105.286 98.322 103.019 102.137 103.019C105.951 103.019 108.031 105.278 108.031 109.245V122.12C108.031 126.079 105.951 128.346 102.137 128.346C98.322 128.346 96.242 126.087 96.242 122.12V109.245ZM100.126 122.366C100.126 124.134 100.901 124.803 102.137 124.803C103.372 124.803 104.148 124.134 104.148 122.366V108.999C104.148 107.231 103.372 106.562 102.137 106.562C100.901 106.562 100.126 107.231 100.126 108.999V122.366Z" fill="white"/> <path d="M112.483 109.245C112.483 105.286 114.563 103.019 118.378 103.019C122.193 103.019 124.273 105.278 124.273 109.245V122.12C124.273 126.079 122.193 128.346 118.378 128.346C114.563 128.346 112.483 126.087 112.483 122.12V109.245ZM116.367 122.366C116.367 124.134 117.142 124.803 118.378 124.803C119.614 124.803 120.389 124.134 120.389 122.366V108.999C120.389 107.231 119.614 106.562 118.378 106.562C117.142 106.562 116.367 107.231 116.367 108.999V122.366Z" fill="white"/> <path d="M132.93 114.303H137.942V117.839H132.93V128.062H129.047V103.311H139.324V106.847H132.93V114.31V114.303Z" fill="white"/> <path d="M132.731 7.57167V33.3301H48.7389C39.8507 33.3301 32.6205 40.571 32.6205 49.4723C32.6205 58.3736 39.8507 65.6146 48.7389 65.6146H132.731V90.589H48.3551C25.4977 90.589 6.90787 71.9716 6.90787 49.0803C6.90787 26.1891 25.4977 7.57167 48.3551 7.57167H132.731ZM139.639 0.653564H48.3551C21.6523 0.653564 0 22.338 0 49.0803C0 75.8226 21.6523 97.5071 48.3551 97.5071H139.639V58.6965H48.7389C43.6501 58.6965 39.5284 54.5687 39.5284 49.4723C39.5284 44.376 43.6501 40.2482 48.7389 40.2482H139.639V0.653564Z" fill="url(#paint0_linear_8_252)"/> <path d="M248.261 58.6965C253.35 58.6965 257.472 54.5687 257.472 49.4723C257.472 44.376 253.35 40.2482 248.261 40.2482H157.361V0.653564H248.645C275.348 0.653564 297 22.338 297 49.0803C297 75.8227 275.348 97.5071 248.645 97.5071H196.322L157.361 128.062V58.6965H248.261Z" fill="url(#paint1_linear_8_252)"/> </g> <defs> <linearGradient id="paint0_linear_8_252" x1="69.8194" y1="0.653564" x2="69.8194" y2="97.5071" gradientUnits="userSpaceOnUse"> <stop stop-color="#7C3FE3"/> <stop offset="1" stop-color="#A328C4"/> </linearGradient> <linearGradient id="paint1_linear_8_252" x1="227.181" y1="0.653564" x2="227.181" y2="128.062" gradientUnits="userSpaceOnUse"> <stop stop-color="#7C3FE3"/> <stop offset="1" stop-color="#A328C4"/> </linearGradient> <clipPath id="clip0_8_252"> <rect width="297" height="127.693" fill="white" transform="translate(0 0.653564)"/> </clipPath> </defs> </svg>'
  const closeIcon =
    '<?xml version="1.0" ?><svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><g fill="#bfb9b9"><path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z"/><path d="M64.2422,31.7578a5.9979,5.9979,0,0,0-8.4844,0L48,39.5156l-7.7578-7.7578a5.9994,5.9994,0,0,0-8.4844,8.4844L39.5156,48l-7.7578,7.7578a5.9994,5.9994,0,1,0,8.4844,8.4844L48,56.4844l7.7578,7.7578a5.9994,5.9994,0,0,0,8.4844-8.4844L56.4844,48l7.7578-7.7578A5.9979,5.9979,0,0,0,64.2422,31.7578Z"/></g></svg>'

  /*
   *--------------------------------------------------------------------------
   * CONFIG OR SETTINGS - Customize the popup banner START
   *--------------------------------------------------------------------------
   */
  const config = {
    themeSettings: {
      primaryColor: '#A328C4', // Primary Color of Popup Banner
      darkColor: '#3b3e4a', // Dark Theme Color
      lightColor: '#ffffff', // Light Theme Color
      themeMode: 'light', // Theme Mode (light|dark)
    },
    enableGoogleConsentMode: true, // Add support for Google consent mode v2 (https://cookiebannergenerator.com/implementing-google-consent-mode-v2-with-cookie-notice-pro-a-step-by-step-guide/)
    enableMinimize: true, // Enable minimized floating cookie icon to adjust preferences
    showCookieIcon: true, // Hide or show the cookie icon
    showSettingsBtn: true, // Hide or show the preference settings(true|false)
    showCloseIcon: false, // Hide or show the popup close icon(true|false)
    showDeclineBtn: true, // Hide or show the cookie decline button(true|false)
    fullWidth: false, // Full width popup works only when "displayPosition" is set to top/bottom
    allCheckboxesChecked: false, // The setting checkboxes should be checked by default initially or not(true|false)
    displayPosition: 'right', // Where popup should appear(top|right|bottom|left)
    settingsBtnLabel: '<span>Privatsphäre-Einstellungen individuell festlegen</span>', // Text of settings button
    delay: 2000, // After how much time should popup appear(2000 is equal to 2 seconds)
    expires: 365, // Expiry date of cookie(365 is equal to 365 days)
    title: 'Cookies consent', // Title of popup bannner
    description:
      '<span>Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z.B. IP-Adresse), um z.B. Inhalte und Anzeigen zu personalisieren, Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.</span><span>  Wir verwenden Cookies und ähnliche Technologien auf unserer Website und verarbeiten personenbezogene Daten von dir (z.B. IP-Adresse), um z.B. Inhalte und Anzeigen zu personalisieren, Medien von Drittanbietern einzubinden oder Zugriffe auf unsere Website zu analysieren. Die Datenverarbeitung kann auch erst in Folge gesetzter Cookies stattfinden. Wir teilen diese Daten mit Dritten, die wir in den Privatsphäre-Einstellungen benennen.</span>', // Message
    acceptBtnLabel: 'Alle akzeptieren', // Accept cookie button text
    declineInfoBtnLabel: 'Weiter ohne Einwilligung', // Decline cookie button text
    moreInfoBtnLink: '/privacy-policy/', // Learn more link(default: privacy policy page)
    moreInfoBtnLabel: '', // More info link text
    cookieTypesTitle: 'Akzeptierte Cookies auswählen', // Title of cookie preference options
    necessaryCookieTypeLabel: 'Notwendig', // Label text of Necessary cookie item
    floatingIconTooltip: 'Meine Einstellungen anpassen', // Tooltip of floating cookie icon (Minimized)
    necessaryCookieTypeDesc: 'Diese Cookies sind für das Funktionieren der Website erforderlich und können in unseren Systemen nicht ausgeschaltet werden.', // Hover text of necessary cookies
    onConsentAccept: () => {
      // It will inject scripts in head if cookie preferences menu(showSettingsBtn) is enabled
      console.log('Zustimmung angenommen!')
    },
    onConsentReject: () => {
      // This code will run on cookie reject/decline
      console.log('Zustimmung abgelehnt!')
    },
    cookieTypes: [
      // Cookie types, value and description (Cookie Preferences Selection)
      {
        type: 'Einstellungen',
        value: 'preferences', // WARNING: DO NOT EDIT THIS VALUE
        description:
          'Präferenz-Cookies ermöglichen einer Webseite sich an Informationen zu erinnern, die die Art beeinflussen, wie sich eine Webseite verhält oder aussieht, wie z. B. Ihre bevorzugte Sprache oder die Region in der Sie sich befinden.',
      },
      {
        type: 'Marketing',
        value: 'marketing', // WARNING: DO NOT EDIT THIS VALUE
        description:
          'Marketing-Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen. Ziel ist es, Anzeigen zu schalten, die für den einzelnen Nutzer relevant und ansprechend sind und damit für Publisher und Drittanbieter wertvoller sind.',
      },
      {
        type: 'Analyse',
        value: 'analytics', // WARNING: DO NOT EDIT THIS VALUE
        description:
          'Analyse-Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, welche Seiten beliebt oder unbeliebt sind und wie sich die Besucher auf der Website bewegen.',
      },
    ],
  }
  /*
   *--------------------------------------------------------------------------
   * CONFIG OR SETTINGS - Customize the popup banner END
   *--------------------------------------------------------------------------
   */

  const COOKIE_CONSENT = 'cnp_consent' // WARNING: DO NOT EDIT THIS VALUE
  const COOKIE_CONSENT_PREFS = 'cnp_prefs' // WARNING: DO NOT EDIT THIS VALUE
  const GOOGLE_CONSENT_MODE_AD_PREFS = 'cnp_gconsent_ad_prefs' // WARNING: DO NOT EDIT THIS VALUE
  const GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE = 'cnp_gconsent_analytics_storage' // WARNING: DO NOT EDIT THIS VALUE

  $.fn.cookieNoticePro = (event) => {
    typeof event === 'object' ? $.extend(true, config, event) : null
    changeRootVariables()
    let cookieConsentExists = cookieExists(COOKIE_CONSENT)
    let cookiePrefsValue = accessCookie(COOKIE_CONSENT_PREFS)

    // If consent is not accepted
    if (!cookieConsentExists || event == 'open') {
      $('#cookieNoticePro').remove()
      $('#cookieMinimizeIcon').remove()

      let cookieTypes =
        '<li><input type="checkbox" name="gdprPrefItem" value="necessary" checked="checked" disabled="disabled" data-compulsory="on"> <label title="' +
        config.necessaryCookieTypeDesc +
        '">' +
        config.necessaryCookieTypeLabel +
        '</label></li>'

      const preferences = JSON.parse(cookiePrefsValue)
      $.each(config.cookieTypes, (index, field) => {
        if (field.type !== '' && field.value !== '') {
          let cookieTypeDescription = ''
          if (field.description !== false) {
            cookieTypeDescription = ' title="' + field.description + '"'
          }
          cookieTypes +=
            '<li><input type="checkbox" id="gdprPrefItem' +
            field.value +
            '" name="gdprPrefItem" value="' +
            field.value +
            '" data-compulsory="on"> <label for="gdprPrefItem' +
            field.value +
            '"' +
            cookieTypeDescription +
            '>' +
            field.type +
            '</label></li>'
        }
      })

      let cookieNotice =
        '<div id="cookieNoticePro" class="' +
        config.themeSettings.themeMode +
        ' display-' +
        config.displayPosition +
        ' full-width-' +
        config.fullWidth +
        '"><div id="closeIcon">' +
        closeIcon +
        '</div><div class="title-wrap">' +
        cookieIcon +
        '<h4>' +
        config.title +
        '</h4></div><div class="content-wrap"><div class="msg-wrap"><p>' +
        config.description +
        ' <a style="color:' +
        config.themeSettings.primaryColor +
        ';" href="' +
        config.moreInfoBtnLink +
        '">' +
        config.moreInfoBtnLabel +
        '</a></p><div id="cookieSettings">' +
        settingsIcon +
        config.settingsBtnLabel +
        '</div><div id="cookieTypes" style="display:none;"><h5>' +
        config.cookieTypesTitle +
        '</h5><ul>' +
        cookieTypes +
        '</ul></div></div><div class="btn-wrap"><button id="cookieAccept" style="color:' +
        config.themeSettings.lightColor +
        ';background:' +
        config.themeSettings.primaryColor +
        ';border: 1px solid ' +
        config.themeSettings.primaryColor +
        ';" type="button">' +
        config.acceptBtnLabel +
        '</button><button id="cookieReject" style="color:' +
        config.themeSettings.primaryColor +
        ';border: 1px solid ' +
        config.themeSettings.primaryColor +
        ';" type="button">' +
        config.declineInfoBtnLabel +
        '</button></div>'

      setTimeout(
        () => {
          $('body').append(cookieNotice)
          $('#cookieNoticePro')
            .hide()
            .fadeIn('slow', () => {
              if (event == 'open') {
                $('#cookieSettings').trigger('click')
                $.each(preferences, (index, field) => {
                  $('input#gdprPrefItem' + field).prop('checked', true)
                })
              }
            })
          if (!config.showSettingsBtn) {
            $('#cookieNoticePro #cookieSettings').hide()
          }
          if (!config.showDeclineBtn) {
            $('#cookieNoticePro #cookieReject').hide()
          }
          if (!config.showCookieIcon) {
            $('#cookieNoticePro #cookieIcon').hide()
          }
          if (!config.showCloseIcon) {
            $('#cookieNoticePro #closeIcon').hide()
          }
        },
        event === 'open' ? 0 : config.delay,
      )
      $('body').on('click', '#cookieAccept', () => {
        hideCookieBanner(true, config.expires)
        $('input[name="gdprPrefItem"][data-compulsory="on"]').prop('checked', true)
        let prefs = []
        $.each($('input[name="gdprPrefItem"]').serializeArray(), (i, field) => {
          prefs.push(field.value)
        })
        createCookie(COOKIE_CONSENT_PREFS, encodeURIComponent(JSON.stringify(prefs)), {
          expires: daysToUTC(365),
          path: '/',
        })
        config.onConsentAccept.call(this)
        config.showSettingsBtn ? typeof injectScripts === 'function' && injectScripts() : null
        if (config.enableGoogleConsentMode) {
          googleConsentModeHandler()
        }
      })
      $('body').on('click', '#cookieSettings', () => {
        if (event === 'open') {
          $('input[name="gdprPrefItem"]:not(:disabled)').attr('data-compulsory', 'off').prop('checked', false)
          $('#cookieTypes').slideDown('fast', function () {
            $('#cookieSettings').prop('disabled', true)
          })
        } else {
          $('input[name="gdprPrefItem"]:not(:disabled)').attr('data-compulsory', 'off').prop('checked', config.allCheckboxesChecked)
          $('#cookieTypes').toggle('fast', function () {
            $('#cookieSettings').prop('disabled', false)
          })
        }
      })
      $('body').on('click', '#closeIcon', () => {
        $('#cookieNoticePro').remove()
      })
      $('body').on('click', '#cookieReject', () => {
        hideCookieBanner(false, config.expires)
        config.onConsentReject.call(this)
        if (config.enableGoogleConsentMode) {
          googleConsentModeHandler()
        }
        // Delete prefs cookie from brower on reject
        createCookie(COOKIE_CONSENT_PREFS, '', {
          expires: daysToUTC(-365),
          path: '/',
        })
      })
    }
    // If already consent is accepted, inject preferences
    else {
      config.showSettingsBtn ? typeof injectScripts === 'function' && injectScripts() : null
      if (config.enableMinimize) {
        minimizeCookieBanner()
      }
      if (config.enableGoogleConsentMode) {
        googleConsentModeHandler()
      }
    }
  }

  /**
   * Check if cookie exists
   * @param {string} cookieName
   */
  const cookieExists = (cookieName) => {
    if (document.cookie.indexOf(cookieName) > -1) {
      return true
    }
    return false
  }

  /**
   * Create the cookie and hide the banner
   * @param {string} value
   * @param {string} expiryDays
   */
  const hideCookieBanner = (value, expiryDays) => {
    createCookie(COOKIE_CONSENT, value, {
      expires: daysToUTC(expiryDays),
      path: '/',
    })
    $('#cookieNoticePro').fadeOut('fast', () => {
      $('body').off('click', '#cookieSettings')
      $('body').off('click', '#cookieReject')
      $('body').off('click', '#closeIcon')
      $('body').off('click', '#cookieAccept')
      $(this).remove()
    })
    if (config.enableMinimize) {
      minimizeCookieBanner()
    }
  }

  /**
   * Minimize the cookie banner and show a minimized icon.
   */
  const minimizeCookieBanner = () => {
    // Remove any existing minimize icon before appending a new one.
    $('#cookieMinimizeIcon').remove()

    // Minimize the banner and show an icon instead.
    let minimizeIcon = $(
      '<div id="cookieMinimizeIcon" class="zoomIn" >' +
        cookieIcon +
        '<div class="floating-text">' +
        config.floatingIconTooltip +
        '</div></div>',
    )
    $('body').append(minimizeIcon)

    // Define the click behavior for the minimize icon.
    $('#cookieMinimizeIcon').on('click', function () {
      if ($(this).hasClass('zoomIn')) {
        $(this).removeClass('zoomIn').addClass('zoomOut')
        setTimeout(() => {
          $.fn.cookieNoticePro('open') // Reopen the cookie notice
        }, 200) // Match the timeout to the animation duration
      } else {
        $(this).removeClass('zoomOut').addClass('zoomIn')
      }
    })
  }

  /**
   * Set Cookie
   * @param {string} name -  Cookie Name
   * @param {string} value - Cookie Value
   * @param {string} expiryDays - Expiry Date of cookie
   */
  const createCookie = (name, value, options = {}) => {
    document.cookie = `${name}=${value}${Object.keys(options).reduce((acc, key) => {
      return acc + `;${key.replace(/([A-Z])/g, ($1) => '-' + $1.toLowerCase())}=${options[key]}`
    }, '')}`
  }

  /**
   * Converts Days Into UTC String
   * @param {number} days - Name of the cookie
   * @return {string} UTC date string
   */
  const daysToUTC = (days) => {
    const newDate = new Date()
    newDate.setTime(newDate.getTime() + days * 24 * 60 * 60 * 1000)
    return newDate.toUTCString()
  }

  /**
   * Get Cookie By Name
   * @param {string} name - Name of the cookie
   * @return {string(number|Array)} Value of the cookie
   */
  const accessCookie = (name) => {
    const cookies = document.cookie.split(';').reduce((acc, cookieString) => {
      const [key, value] = cookieString.split('=').map((s) => s.trim())
      if (key && value) {
        acc[key] = decodeURIComponent(value)
      }
      return acc
    }, {})
    return name ? cookies[name] || false : cookies
  }

  /**
   * Updates Google Consent Mode based on user consent and preferences.
   */
  const googleConsentModeHandler = () => {
    if (!config.enableGoogleConsentMode) return
    const consent = JSON.parse(accessCookie(COOKIE_CONSENT))
    const preferences = JSON.parse(accessCookie(COOKIE_CONSENT_PREFS))
    const googleConsentAnalyticsStorage = JSON.parse(accessCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE))
    const googleConsentAdPrefs = JSON.parse(accessCookie(GOOGLE_CONSENT_MODE_AD_PREFS))

    try {
      // if consent is accepted
      if (consent === true) {
        /** GOOGLE CONSENT ANALYTICS STORAGE */
        // if analytics is accepted and google consent analytics storage does not exist
        if (preferences.indexOf('analytics') > -1 && !cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, encodeURIComponent(true), {
            expires: daysToUTC(365),
            path: '/',
          })
          gtag('consent', 'update', {
            analytics_storage: 'granted',
          })
        }
        // if analytics is accepted and google consent analytics storage exist
        else if (preferences.indexOf('analytics') > -1 && cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          if (googleConsentAnalyticsStorage === true) {
            gtag('consent', 'update', {
              analytics_storage: 'granted',
            })
          }
          if (googleConsentAnalyticsStorage === false) {
            createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, encodeURIComponent(true), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              analytics_storage: 'granted',
            })
          }
        }
        //  if analytics is removed and google consent analytics storage exist
        else if (preferences.indexOf('analytics') === -1 && cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          if (googleConsentAnalyticsStorage === true) {
            createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, encodeURIComponent(false), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              analytics_storage: 'denied',
            })
          }
        }

        /** GOOGLE CONSENT AD PREFS */
        // if marketing is accepted and google consent ad prefs storage does not exist
        if (preferences.indexOf('marketing') > -1 && !cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, encodeURIComponent(true), {
            expires: daysToUTC(365),
            path: '/',
          })
          gtag('consent', 'update', {
            ad_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          })
        }
        // if marketing is accepted and google consent ad prefs storage exist
        else if (preferences.indexOf('marketing') > -1 && cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          if (googleConsentAdPrefs === true) {
            gtag('consent', 'update', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            })
          }
          if (googleConsentAdPrefs === false) {
            createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, encodeURIComponent(true), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
            })
          }
        }
        //  if marketing is removed and google consent ad prefs storage exist
        else if (preferences.indexOf('marketing') === -1 && cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          if (googleConsentAdPrefs === true) {
            createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, encodeURIComponent(false), {
              expires: daysToUTC(365),
              path: '/',
            })
            gtag('consent', 'update', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            })
          }
        }
      } else {
        if (cookieExists(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE)) {
          if (googleConsentAnalyticsStorage === true) {
            createCookie(GOOGLE_CONSENT_MODE_ANALYTICS_STORAGE, '', {
              expires: daysToUTC(-365),
              path: '/',
            })
            gtag('consent', 'update', {
              analytics_storage: 'denied',
            })
          }
        }
        if (cookieExists(GOOGLE_CONSENT_MODE_AD_PREFS)) {
          if (googleConsentAdPrefs === true) {
            createCookie(GOOGLE_CONSENT_MODE_AD_PREFS, '', {
              expires: daysToUTC(-365),
              path: '/',
            })
            gtag('consent', 'update', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
            })
          }
        }
      }
    } catch (error) {
      console.warn('CookieNoticePro: Error initializing Google Consent Mode. Ensure gtag.js is correctly installed:', error)
    }
  }

  const changeRootVariables = () => {
    $(':root').css('--cookieNoticeProLight', config.themeSettings.lightColor)
    $(':root').css('--cookieNoticeProDark', config.themeSettings.darkColor)
  }

  return (window.cookieNoticePro = {
    init: (config) => {
      $.fn.cookieNoticePro(config)
    },
    /**
     * Reopens the cookie notice banner
     */
    reinit: () => {
      $.fn.cookieNoticePro('open')
    },

    /**
     * Returns true if consent is given else false
     */
    isAccepted: () => {
      let consent = accessCookie(COOKIE_CONSENT)
      return JSON.parse(consent)
    },

    /**
     * Returns the value of the cookieConsentPrefs cookie
     */
    getPreferences: () => {
      let preferences = accessCookie(COOKIE_CONSENT_PREFS)
      return JSON.parse(preferences)
    },

    /**
     * Check if a particular preference is accepted
     * @param {string} cookieName
     */
    isPreferenceAccepted: (cookieTypeValue) => {
      let consent = JSON.parse(accessCookie(COOKIE_CONSENT))
      let preferences = accessCookie(COOKIE_CONSENT_PREFS)
      preferences = JSON.parse(preferences)
      if (consent === false) {
        return false
      }
      if (preferences === false || preferences.indexOf(cookieTypeValue) === -1) {
        return false
      }
      return true
    },
  })
})(jQuery)
