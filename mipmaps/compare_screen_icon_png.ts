/* eslint-disable */
/* @formatter:off */

import MipmapElement from '../../phet-core/js/MipmapElement.js';

// The levels in the mipmap. Specify explicit types rather than inferring to assist the type checker, for this boilerplate case.
const mipmaps = [
  new MipmapElement( 548, 373, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiQAAAF1CAYAAADYyfG/AAAAAklEQVR4AewaftIAAAxLSURBVO3Bza5d91kH4F/e81F8tqBnpbIZYKRkX0GlPSAdM2NKQYwZ9Fp6C/QW9i0gMbQZ7EyYVemSqliCqGp265DGrc9aG6hFLcsfsaX4/NfH8zwfnP5XAAAaqgAANFYBAGisAgDQWAUAoLEKAEBjFQCAxioAAI1VAAAaqwAANFYBAGisAgDQWAUAoLEKAEBjFQCAxioAAI1VAAAaqwAANFYBAGisAgDQWAUAoLEKAEBjFQCAxioAAI1VAAAaqwAANFYBAGisAgDQWAUAoLEKAEBjFQCAxioAAI1VAAAaqwAANFYBAGisAgDQWAUAoLEKAEBjFQCAxioAAI1VAAAaqwAANFYBAGisAgDQWAUAoLEKAEBj5+Gt3NzsA1PzwQf3c3b2owDM3Xn4Vjc3+/zhD/8YmJqzs3/I2dmPAjB3Fb7VMOwDALw/Fb7VMOwDU3Q8BmARKrzRMDwITFXfB2ARKrzRMOwDALxfFd5oGPYBAN6vCq81DA9yOj0KAPB+VXitYdgHAHj/KrzWMOwDALx/FV5pHD/P6fQoMGWffhqARajwSsOwDwBwOyq80jDsAwDcjgovGcfPM44PAwDcjgovGYZ9AIDbU+Elw7APAHB7KrxkHB8Gpq7vA7AYFV5wc7MPzMHxGIDFqPCCYdgHALhdFV4wDPsAALerwp/c3OwDANy+Cn8yDPsAALevwp8Mwz4wF8djABajwh/d3OwDc9L3AViMCn80jg8Cc/PZZw8CsAQV/mgY9oG5+fLLRwFYggoZhgc5nR4FAGijQoZhHwCgnQoZhn0AgHYqKzcMD3I6PQrMzaefBmAxKis3jg8CALRVWblh2AcAaKuyYuP4ecbxYQCAtiorNgz7AADtVVZsGPYBANqrrNQ4fp5xfBiYo74PwKJUVmocHwbm6ngMwKJUVmoY9gEApqGyUsOwDwAwDZUVurnZBwCYjsoKDcM+AMB0VFZoGPaBOTseA7AolZW5udkH5q7vA7AolZUZxwcBAKalsjLDsA8AMC2VFRmGBzmdHgUAmJbKigzDPgDA9FRWZBj2AQCmp7ISw/Agp9OjwBJ8+mkAFqWyEuP4IADANFVWYhj2AQCmqbIC4/h5xvFhAIBpqqzAMOwDAExXZQWGYR8AYLoqCzeOn2ccHwaWou8DsDiVhRvHh4ElOR4DsDiVhRuGfQCAaass3DDsAwBM23kW7Ne/3ufnPw8syi9/GYDFOc+CPXmSfPFFYFF+85sALE5lwe7cuR8AYPoqC/bhhz8KADB9FQCAxioAAI1VAAAaqwAANFYBAGissnBd90kAgGmrLNydO38dAGDaKsCsffbZgwDMXQWYtS+/fBSAuasAADR23n85Zsm+/sMpsGRf/Pcp/ZdjAObs/F9/MWbJ/uLrU/4ssFz/8V9j/vMXYwDmrLJwTy8/CQAwbZWFG8/uBwCYtgoAQGMVAIDGKgAAjVUAABqrALP21fnHAZi7ysL9/s6PAwBMWwUAoLEKAEBjFWBW7twJwOJUgFn5wQ8CsDgVAIDGKsBsfVN3A7AElRV4cufvA0t0U5sALEEFAKCxCgBAYxUAgMYqAACNVQAAGjvPCoxn9wNL9KTuhWQ8HHLzs58FpuDipz/NB10X3k1lBZ5efhJYopvaBJiWU9+Hd1cBAL4z4+EQ3l0FYOaeBqZj7Pvw7ioAM/ckMCHHY8a+D++mAgB8p059H95NBQD4Tp36PrybygoMZ/cDS3TzwSbA9IyHQ3g3lRW4ufwksERPzu4FmKbxcAhvrwIAfOfGvg9vrwIAfOdOfR/eXgVgAb4JTMup78PbqwAswE1gesbDIbydCgDwXoyHQ3g7lZV4evk3AYDbNPZ9eDuVlRjO7geW5KvzjwJM3PGY0/EYvl0FAHhvxsMhfLsKAPDenPo+fLsKwAI8DUzTeDiEb1cBWIAngeka+z68WQWYta+/Pmbtnh6PgSk79X14s8pKPL38JLBEv/pVn7X7Xd8Hpmw8HMKbVVZiPLsfWJIndS/APJz6PrxZBZilm9oEmI/xcAivVwEA3rux78PrVQCA9248HMLrVQAW4KvAxB2POR2P4dUqAMCtOPV9eLXKSvz+zo8DAC2Nh0N4tQowS0/qXoB5GQ+H8GoVYJZuahNgfsa+Dy+rALPz4YcBZurU9+FlFWB27twJMFOnvg8vqwAsxDeB6RsPh/CyyooMZ38VYLluAvMwHg7hRZUVeXr5SQCgtbHvw4sqwOzcfHAVYL5OfR9eVAFm58nZvQDzder7nI7H8FwFALh1p74Pz1UAgFs3Hg7huQoAcOvGvg/PVVZkPLsfYLm+CszI8ZjT8RieqazI08tPAgBTMR4O4ZkKANDEqe/DMxVgdr46/zjA/I2HQ3imAgA0M/Z9SCoAQDPj4RCSCgDQzKnvQ3KeFfnq7G/z77/658DcffH78ArfBObn1PchqazI5WUXYLluAvM0Hg5ZuwoA0NR4OGTtKgBAU2PfZ+0qAEBbx2NOx2PWrAIANHfq+6xZBQBobjwcsmbnefwoa3J1c5nf/a4PzNrjJI/zzOO/TB4/yqo9fpQ8fpT/8zTJRWB+xn97lPzT32WtKitzedkFWK4ngfka+z5rVQEAJuHU91mrCgAwCePhkLWqAACTcOr7rFUFAJiM8XDIGlUAgMkY+z5rVFmZ6+tdAGCqTn2fNaoALMhXgXk79X1Ox2PW5jwAC/I0yePAvP153+d7u13W5DwAC/JNkq8D8/ZRku9lXSoAM/fbwyHAvFWAWfvoo10A5q4CANBYZWWur3cBgCm73u2yNhUAgMYqAACNVYDZ2WzCa5wCzFEFmJ2LiwAsSgUAoLHKCl1cdIGl+PjjXYDluOi6rFFlhTabbQBgijbbbdaoAgDQWAUAoLEKAEBjFQCAxioAAI1VVujiogsATNFF12WNKiu02WwDS3D37jbAsmy226xRBZitzaYLwBJUAAAaqwAANFYBAGisAgDQWGWFrq62AYAputpus0aVFbq87AIAU3TZdVmjCjBbd+9uA7AEFWC2NpsuAEtQAQBorAIA0FgFAKCxykpdX+8CAFNyvdtlrSoAAI1VAAAaqwCzde/eNgBLUAFma7PpArAEFQCAxioAAI1VVur6ehcAmJLr3S5rVQEAaKwCANBYBQCgsQowS1dXXQCWogLM0r172wAsRWWlLi66AMCUXHRd1qqyUpvNNgAwJZvtNmtVAZix3x4OAeavAgDQWAWYnc0mvMYpwBxVgNm5vAzAolSAWdpsugAsRWXFLi66wFzdvbsNsBwXXZc1q6zYZrMNAEzBZrvNmlUAABqrAAA0VgEAaKwCANBYBQCgscqKXV1tAwBTcLXdZs0qK3Z52QXm6uOPdwGW47LrsmYVAIDGKgAAjVUAABqrAAA0dp4Vu77e5Yc//JcAAG1VAIDmrrbbrFkFAGjusuuyZhUAgMYqAACNVQAAGqsAADRWAQBorAIANHW922XtKgAAjVUAABqrAAA0VgEAaKwCANBYBQCgsQoA0NT1bpe1qwAANFYBAGisAgDQWAUAoLEKAEBjFQCgqYuuy9pVAICmNttt1q4CANBYBQCgsQrAjF1tt/l/pwBzVQGYsYuuCzB/FQCAxioAQDNX221IKgBAM5ddF5IKAEBjFQCAxioAAI1VAAAaqwDM3NV2G2DeKgAzd9F1gbm62m5DUgEAmrnsupBUAAAaqwAANFYBAGisAgDQWAUAoLEKANDM9W4XkgrAzF10XYB5qwDM3NV2G2DeKgAAjVUAABqrAAA0VgEAaKwCADRxvduFZyoAAI1VAAAaqwAANFYBmLnv73YB5q0CANBYBQBo4qLrwjMVAKCJzXYbnqkAADRWAQBorAIA0FgFAKCxCgBAYxWABfj+bheYm4uuC89UAIAmNttteKYCANBYBQCgsQrAQpwCzFUFAKCxCgBAYxUA4NZdbbfhuQoAcOsuuy48VwFYgKvtNsB8VQAW4KLrAsxXBQCgsQoAQGMVAIDGKgDArbvabsNzFQDg1l12XXiuAgDQWAUAoLEKwAJcdF2A+aoALMDVdhtgvioAAI1VAIBbd73bhecqAACNVQAAGqsAADRWAQBorAIA0FgFYCEuui4wBxddF15UAViIq+02MAeb7Ta8qAIA0FgFAKCx8wAsxEc/+UmAeaoAADRWAQBorAIA0FgFAKCxCgBAYxUAgMYqAACNVQAAGqsAADRWAQBo7H8AtQhEZBSRt7AAAAAASUVORK5CYII=' ),
  new MipmapElement( 274, 187, 'data:image/png;base64,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' ),
  new MipmapElement( 137, 94, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAABeCAYAAAAXHzdeAAAAAklEQVR4AewaftIAAAS4SURBVO3Bv65dxRXA4d+smb33Ofce2xgZUEgRCeQCF4gCyU+QItCENwCJ96BFikgRJV2UJ6BIGdEYiQYixzTGibnmT4yxjG0cGZP7x2fPDDwBx3vWLu66Z31fqD/DuV8gOLeB4NwGgnMbCM5tIDi3geDcBoJzGwjObSA4t4Hg3AaJmZRyk1K+47iL8QIh7OKeXGImR0d/otb3OO5CuMlyuYt7csIMSnlArX/GgvUaN5Ewg5w/A46w4PAQN5Ewg5w/xIL1GtdAUKr1R0r5CxYcHeEaCEo5XwO+w4LDQ8i54qYRlMbxI6woBXIuuGkEhVoPKeVvWLFe4xoICjlfB65hxcEBroGgkPNlLFmvcQ2ERrWO5PxXLDk4wDUQGpVyA/gYS8YR10BoNI7/wppxxDUQGuX8PtY8fIhrkGiwXj/i0qW/Y83eHly8iJso0aDrTrFeY8444hoIjVJ6EYtyHnHTpJv/K7SoYYlFX955QDhdcE8u/eNGocXT9SUSV7Hmk1uFPSm4Jyc0quEsFlUibhqhUZXfYE2MUELCTSM0qiFiTd9DxU0lNKpBsKjipko0qnIai2oQNPLef8h/+CPHmbzxGul3v2cuQqNKh0UVnczxV/55mTkJjWp8HosqkRPv27uU7+8zF6FRJWBOWKKVsaF+8xVzERrVIFhTGdCq2FCu/5u5CI2KLLCmhiXrxwdorA8PsKB+coWaM3MQWoUOaypLai1o1FIw4cd96p3bzEFoVOQZrAlhhVbBjvL1F8xBaFQD5sTUMYeMDfWzq8xBaFRDxJoShDlUbKifXqUe7KMlNKqhw57AHApG5EK5fQstoVENCWtK6JlDxY765R5aiUZFzvLBvbew5MEP8MLTqBXsKFc+hd++jkZiPKJF4Gd5hFowYwTyYxiPaJYfU/NjzPj8BvXBXcLpM7RK7N+jVTo6ZBwfYsY+sH8f9u/R7OA++f/3sKR8fpl44WVaCQoiK9zxV/auo5FQENnBGpGIRs2ZO8Bd7Bi+/i8v0C6hkNJZrElpQKOUzAhU7OjOnUVDUJAwYEmMIDGybaQf0BAUYhywJAQY+h22TewHNASFIB3mhMC2CalDQ1CIcYE1MSW2TVws0BAUYtzFmhCEbRNXu2gICiI91nTdwLaRrkdDUIixx5oQhG0Tux4NQSGEiDXDsMO2CRLREBSiDNgS2EZxGNAQFCQusKTrT6NVxxFrZFigISiIdFgSo6A1PnpExRbpOzQEhSgdliyX59hGMXZoCAohCO74CyJoCAoxDViys/Mc2yj2AxoJhRiXnD//DlbEOLCNQtehkVAIIbK7+zzueIvDgIbgTrR4ZoWW4E60ECNagjvR0q+eRUtwJ5osF2gJbhIZBiyJT51BS3CTxJ0dLIldh5bgJgkhYEmQiJbgJpHUYUnaXaEluBNNug4twU0ShwWWxFOn0BLcJEEES0QiWoKbRIYBS0KMaAluktD3WBKHBVqCmyQEwZIQI1qCm0QkYklardAS3IkWgqAluEnisMASkYiW4CYJIWCJ9D1agptEhgFLRCJagptEug5L0mqFluAmC32HBaHvmEPCTfbrt9+klMxxJxKZQ8JNdu6VV9kmgnMbJOBdnPsFPwHObzIECd3/1QAAAABJRU5ErkJggg==' ),
  new MipmapElement( 69, 47, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAAvCAYAAAC14gcVAAAAAklEQVR4AewaftIAAALDSURBVO3BvY5cNRiA4defv+MzfwpES4CCpSTSUnANaZDoEMr9UFAjroEyHRJQJV0KGhIpBARCJAJCRDNkkxWzszNnbEOJtIw9ha2xYJ7HxL9x8E+3hYNLhINLhINLhINLlB2EMAcGSjLmVYyxtEjJiHHg4uID4C4lqb7AuSu0SMjw/hFwl5JCgGGgWUKG919T2noNMUZaJSTEGPD+FqVtNhBCpFVCQgi/AF9Q2mpF04QE7+9Tw3pN04SEzeZzahgGmqZsEcKGO3c+pYb5HG7epFn6Yhn5d5bIMTE8oTTv4XSxJnaRFumtbz3bHHEdyxNq+Oy7NeOXPC0SEqJ5kxqshWCEVikJUXrwFGcMRAwp/vGP8GxOMZMp9uQddqEkRHNELRFDin/4AL68TTEjh3z8CabryBESoplShRkDhpRAYRdr4u+/sQshIcqIGiIzgh9I8esVpYWfH7ELISGaq9RgzBVyQoyUFh5+wy6EhGiUKkTJCVTw4Afi4k9ylITn/mXmi3cp7ezC0ZMWqSM8/RX71gkpyvIZ25wuIk//mFLacgknr53C0rFNWJ/B8jmlxe/vwfHrpCjDOdvIZgPDguLWwHAOwznbrIYFw7CgNLn3Fddu3CBFSRDbU4MxYG1HytJ7zijPqXCNNCFBpKMGY8Bqxz7YfkyOkCDiqEXEsg8ym5AjJFjrqMVaZR/seEKOkCBGqUXVsQ/iHDlCglhHDVZH5ITVihrseEKOkCBGqaHrZuTEYaAG2zlylASxjleO3qc0q1P2RfqeHCVBRHnj+D3+S+xoRI7wP2O0I0dolLGWGmzfkyM0SiZjahBVcoRGiVVqkM6RIzRKnKMGcT05QqNMP6IGsUqO0ChRpQZxHTlCo4xVahDbkSM0SpyjBlElR2iUOEdxxmD7nhylUVevv830ow8py7ALBe7ToG46o5vO2IOf/gKtKcWzfqidDwAAAABJRU5ErkJggg==' ),
  new MipmapElement( 35, 24, 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAYCAYAAABwZEQ3AAAAAklEQVR4AewaftIAAAGxSURBVM3BTWoUQRiA4be+ruqeiYlGgiABlyouwgRyAVeeICtv4E08gRfQhVs9hSCiBhdqdkKQTpSgMy0z/VNlNg1FIcyHFpLnMeECl8Nj4RKxJELogCU6mxhjyMWSaNuXDMMh64QAZbnEuYpchEgIgWF4gUbfg/eBnISI91+Bp2i0LdlZIufnHzk7Q2U+h9mMrOzrLwOjn/XA/ASVpoF2u6WaOHKxb+vAaLqYsIWOCLw7DZRVYOS/1dD3rGOubmM2rpCyRLxU6FkChlj3/Bnm6BPryMND7P0HpIRIMBVq5jrBe2K+79HwR+/5E0ukp+JHe4DGqnekfAgUKHw4JizmmM0tYpZFzWjxq+HzyU00ug72dmoYGkar5Xf6xSkqx28ob98jZvEdI+GC79AwHoQAvmNU9ytWvkPj1qphx3fEhIhIiZqBorD8LXElKSEiYtEyRigKSywMHi1xJSlLRMSxMd1Hw0hFKnQtWoVzpCwREcudu4/4H8SVpISMjHNoiXOkhIxkUqEl1pESMpLJFC2xlpSQkZQlWmIdKUtG1/b2mezuoiHOkbLAEzK5MTvgH7z6DeWSjNPx3HRhAAAAAElFTkSuQmCC' )
];

export default mipmaps;