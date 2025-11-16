import React from 'react';
import config from '../config';

interface SwarmIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name SwarmIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/swarm)
 * @see {@link https://clicons.dev/icon/swarm}
 */
const SwarmIcon = React.forwardRef<SVGSVGElement, SwarmIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M17 5.16667C17 6.54738 15 8 15 8C15 8 13 6.54738 13 5.16667C13 3.78595 13.8954 3 15 3C16.1046 3 17 3.78595 17 5.16667Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.19619 6.2113C8.38286 6.85752 10 10.3713 10 10.3713C10 10.3713 7.01604 12.5253 4.82937 11.8791C2.6427 11.2328 1.70394 9.59622 2.08138 8.03111C2.45882 6.466 4.00952 5.56508 6.19619 6.2113Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.15 20.0801C14.4577 22.1966 8 19.9982 8 19.9982C8 19.9982 9.31133 13.3462 13.0036 11.2297C16.6958 9.11311 19.9496 9.88953 21.3708 12.3335C22.7919 14.7775 21.8422 17.9635 18.15 20.0801Z'
    }
  ],
  [
    'path',
    {
      d: 'M16 10.5C16 13.5398 17.5963 16.3439 20 18.0664M11 13.0581C11.183 15.8919 13.7098 18.888 16 20.5'
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

SwarmIcon.displayName = 'SwarmIcon';
export default SwarmIcon;
