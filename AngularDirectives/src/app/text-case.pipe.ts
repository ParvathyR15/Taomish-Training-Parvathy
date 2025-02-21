import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'textCase',
  standalone:false
})
@Injectable({
  providedIn: 'root' // ✅ Ensure it's globally available
})
export class TextCasePipe implements PipeTransform {
  transform(value: string, caseType: 'snake' | 'camel'): string {
    if (!value || typeof value !== 'string') return ''; // ✅ Handle empty input

    if (caseType === 'snake') {
      return value.trim().replace(/\s+/g, '_').toLowerCase(); // ✅ Fix for multiple spaces
    }

    if (caseType === 'camel') {
      return value
        .trim()
        .split(' ')
        .map((word, index) =>
          index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
    }

    return value;
  }
}
