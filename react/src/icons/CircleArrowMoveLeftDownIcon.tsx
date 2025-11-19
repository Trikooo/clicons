import React from 'react';
import config from '../config';

interface CircleArrowMoveLeftDownIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name CircleArrowMoveLeftDownIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/circle-arrow-move-left-down)
 * @see {@link https://clicons.dev/icon/circle-arrow-move-left-down}
 */
const CircleArrowMoveLeftDownIcon = React.forwardRef<SVGSVGElement, CircleArrowMoveLeftDownIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
    }
  ],
  [
    'path',
    {
      d: 'M9.51204 11.638C8.98182 11.0262 7.91022 10.1593 8.01948 9.79956M8.01948 9.79956C8.01948 9.38054 9.07053 8.58147 9.51204 7.99561M8.01948 9.79956C9.93839 9.92155 12.4115 9.54648 13.419 10.3459C14.4795 11.233 14.0925 13.7555 14.1988 15.9882M14.1988 15.9882C13.6637 16.035 12.9727 15.003 12.3644 14.4687M14.1988 15.9882C14.5543 16.0858 15.4634 14.9805 15.9963 14.471'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

CircleArrowMoveLeftDownIcon.displayName = 'CircleArrowMoveLeftDownIcon';
export default CircleArrowMoveLeftDownIcon;
