import { Types } from "..";
import { Base } from "../utils";
import { Web } from "./web";

/**
 * List
 */
class _List extends Base {
    /**
     * Constructor
     */
    constructor(listName, targetInfo?) {
        // Call the base constructor
        super(targetInfo);

        // Default the properties
        this.targetInfo.defaultToWebFl = true;
        this.targetInfo.endpoint = "web/lists/getByTitle('" + listName + "')";

        // Add the methods
        this.addMethods(this, { __metadata: { type: "list" } });
    }

    // Method to get the list by the entity name.
    static getByEntityName(entityTypeName, callback, targetInfo?) {
        // Query for the list
        let query = (new Web(targetInfo))
            // Get the lists
            .Lists()
            // Set the query
            .query({
                Filter: "EntityTypeName eq '" + entityTypeName + "'",
                Top: 1
            });

        // See if the callback exists
        if (typeof (callback) != "function") {
            // Execute the request synchronously and return it
            let list = query.executeAndWait();
            return list.results ? list.results[0] : list;
        }

        // Execute the request asynchronously
        query.execute((lists) => {
            // Execute the callback method
            callback(lists.results ? lists.results[0] : lists);
        });
    }
}
export const List: Types.SP.IList = <any>_List;