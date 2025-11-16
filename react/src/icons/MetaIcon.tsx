import React from 'react';
import config from '../config';

interface MetaIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name MetaIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/meta)
 * @see {@link https://clicons.dev/icon/meta}
 */
const MetaIcon = React.forwardRef<SVGSVGElement, MetaIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 9.86967C13.9623 6.62167 15.6835 5 17.1647 5C19.387 5 20.7904 7.58183 21.6093 11.0865C22.3915 14.4337 22.1649 19 19.387 19C18.1491 19 16.4446 17.1742 14.7779 14.7393C13.7173 13.205 12.7878 11.5755 12 9.86967Z',
      fillRule: 'evenodd'
    }
  ],
  [
    'path',
    {
      d: 'M12 9.86967C9.84147 6.62167 7.94817 5 6.31888 5C3.87433 5 2.3306 7.58183 1.42978 11.0865C0.569303 14.4337 0.818647 19 3.87433 19C5.23594 19 7.11091 17.1742 8.94432 14.7393C10.1666 13.1165 11.1847 11.4925 12 9.86967Z',
      fillRule: 'evenodd'
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

MetaIcon.displayName = 'MetaIcon';
export default MetaIcon;
