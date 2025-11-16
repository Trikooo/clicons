import React from 'react';
import config from '../config';

interface TiktokLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name TiktokLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/tiktok-logo)
 * @see {@link https://clicons.dev/icon/tiktok-logo}
 */
const TiktokLogoIcon = React.forwardRef<SVGSVGElement, TiktokLogoIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      fillRule: 'evenodd',
      d: 'M16 6.295c-1.92-.121-3.028-1.306-3.263-3.295l-2.306.008v8.367c.349 4.465-3.839 3.789-4.166 1.503-.167-1.192.432-1.875 1.502-2.232a6.841 6.841 0 0 1 1.109-.273v-2.362c-4.796.167-5.715 4.473-4.22 6.918 2.322 3.804 8.112 2.148 8.112-3.167v-4.176c1.138.683 2.117 1.048 3.232.942v-2.233Z'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

TiktokLogoIcon.displayName = 'TiktokLogoIcon';
export default TiktokLogoIcon;
