import React from 'react';
import config from '../config';

interface FacebookLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name FacebookLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/facebook-logo)
 * @see {@link https://clicons.dev/icon/facebook-logo}
 */
const FacebookLogoIcon = React.forwardRef<SVGSVGElement, FacebookLogoIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      d: 'M10 3c-3.866 0-7 3.154-7 7.045 0 3.506 2.544 6.414 5.875 6.955v-4.187h-1.875v-2.186h1.875v-1.666c0-1.895 1.103-2.942 2.79-2.942.808 0 1.653.148 1.653.148v1.86h-.931c-.918 0-1.204.584-1.204 1.182v1.418h2.048l-.327 2.186h-1.72v4.177c3.302-.566 5.816-3.46 5.816-6.945 0-3.89-3.134-7.045-7-7.045Z'
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

FacebookLogoIcon.displayName = 'FacebookLogoIcon';
export default FacebookLogoIcon;
