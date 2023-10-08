import { type SchemaTypeDefinition } from 'sanity'

// import schema_list from './schemas/index';
// import resourcePlaylist from './schemas/resource.playlist';
// import resource from './schemas/resource.schema'
import res from './schemas/resource.schema'
import pl from './schemas/resource.playlist'


export const schema: { types: SchemaTypeDefinition[] } = {
    types: [res, pl],
}
