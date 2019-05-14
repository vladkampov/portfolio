import { observable, action, decorate } from 'mobx';
import { short } from '../api/shortener';

class UrlStore {
    shortenUrl = null;
    isLoading = false;
    loadingError = null;

    makeCall = (action, ...rest) => {
        this.isLoading = true;

        return action(...rest)
            .then(({ data }) => {
                this.isLoading = false;
                return data;
            })
            .catch(err => {
                this.isLoading = false;
                this.loadingError = true;
                return Promise.reject(err);
            });
    };

    shortIt = data => {
        this.shortenUrl = null;
        return this.makeCall(short, data)
            .then(urlObj => {
                this.shortenUrl = urlObj.url
            });
    }
}

export default decorate(UrlStore, {
    shortenUrl: observable,
    isLoading: observable,
    loadingError: observable,
    shortIt: action
});
