const defaults = {
    CORE_API_DOMAIN: 'https://kmpv.me',
};

const prefix = 'REACT_APP_';

export default key => process.env[`${prefix}${key}`] || defaults[key];
