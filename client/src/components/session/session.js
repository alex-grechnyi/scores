import React from 'react';
import { Query } from 'react-apollo';
import {USER} from "../../queries/queries";

const withSession = Component => props => (
    <Query query={USER.GET_ME}>
        {({ data, refetch }) => (
            <Component {...props} session={data} refetch={refetch} />
        )}
    </Query>
);

export default withSession;