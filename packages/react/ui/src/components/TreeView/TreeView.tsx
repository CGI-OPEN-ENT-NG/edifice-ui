import { Ref, forwardRef } from "react";

import { TreeData } from "../../types";
import { TreeNode } from "./TreeNode";
import { useTreeView } from "./hooks/useTreeView";

export interface TreeViewHandlers {
  unselectAll: () => void;
  select: (nodeId: string) => void;
}

export interface TreeViewProps {
  /**
   * TreeNode data
   */
  data: TreeData | TreeData[];

  /**
   * Node ID used for navigation folders
   */
  selectedNodeId?: string;

  /**
   * Show Section Icon Folder
   */
  showIcon?: boolean;

  /**
   * Pass draggeNode when you drag an element from another context (resource / folder)
   */
  draggedNode?: {
    isOver: boolean;
    overId: string | undefined;
    isTreeview: boolean;
  };

  /**
   * Callback function to provide selected item to parent component
   */
  onTreeItemClick?: (nodeId: string) => void;

  /**
   * Callback function to provide folded item to parent component
   */
  onTreeItemFold?: (nodeId: string) => void;

  /**
   * Callback function to provide unfolded item to parent component
   */
  onTreeItemUnfold?: (nodeId: string) => void;
}

/**
 * UI TreeView Component
 */

const TreeView = forwardRef(
  (props: TreeViewProps, ref: Ref<TreeViewHandlers>) => {
    const {
      data,
      onTreeItemClick,
      onTreeItemUnfold,
      onTreeItemFold,
      draggedNode,
      showIcon = true,
      selectedNodeId: externalSelectedNodeId,
    } = props;

    const {
      selectedNodeId,
      expandedNodes,
      draggedNodeId,
      handleItemClick,
      handleFoldUnfold,
    } = useTreeView({
      data,
      ref,
      externalSelectedNodeId,
      draggedNode,
      onTreeItemClick,
      onTreeItemFold,
      onTreeItemUnfold,
    });

    return (
      <div className="treeview">
        <ul role="tree" className="m-0 p-0">
          {Array.isArray(data) ? (
            data.map((node) => {
              return (
                <TreeNode
                  node={node}
                  key={node.id}
                  showIcon={showIcon}
                  selectedNodeId={selectedNodeId}
                  expandedNodes={expandedNodes}
                  draggedNodeId={draggedNodeId}
                  handleItemClick={handleItemClick}
                  handleToggleNode={handleFoldUnfold}
                />
              );
            })
          ) : (
            <TreeNode
              node={data}
              selectedNodeId={selectedNodeId}
              expandedNodes={expandedNodes}
              draggedNodeId={draggedNodeId}
              handleItemClick={handleItemClick}
              handleToggleNode={handleFoldUnfold}
            />
          )}
        </ul>
      </div>
    );
  },
);

TreeView.displayName = "TreeView";

export default TreeView;
