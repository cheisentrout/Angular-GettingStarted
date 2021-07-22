import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {
    transform(value: string, character: string): string {
        return value.replace(character, ' ')
    }
}

/* NOTES
- when you import an interface, you're required to implement every
property and method defined on that interface
- For a built in Angular interface like PipeTransform, there is only
one method to implement - transform()
*/